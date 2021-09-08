const express = require('express')
const open = require('open')
const WebSocket = require('ws');
const { ArgumentParser } = require('argparse');
const { version } = require('./package.json');


var app = express()
const expressWs = require('express-ws')(app)
const numEntries = 0xec;

app.use(express.urlencoded())
app.use('/', express.static(__dirname + '/static'))
app.set('views', './views')
app.set('view engine', 'pug')

const initState = () => {
  let journal = Array(numEntries).fill(0)
  journal[0] = 1
  journal[0x5e] = 1
  journal[0x5f] = 1
  journal[0x60] = 1
  journal[0x61] = 1

  return { 'journal': journal };
}

var state = initState();
var roomCode = null;
var fyiConnection = null;

const tryInt = (value) => {
  return isNaN(+value) ? value : +value
}

const updateJournal = (newState) => {
  console.log('Updating state from other player.')
  newState.map((entry, idx) => {
    var authoritative = (fyiConnection == null)
    if (authoritative || entry) {
      state['journal'][idx] = entry;
    }
  });
}

const connectFyi = (connectRoomCode) => {
  if (!connectRoomCode) {
    return null;
  }
  console.log(`Connecting to spelunky.fyi with room code ${connectRoomCode}`)

  var ws = new WebSocket(`wss://spelunky.fyi/ws/tools/coop-aje-tracker/${connectRoomCode}/`)

  ws.on('open', () => {
    console.log('Connected to Spelunky.fyi')
  })

  ws.on('message', (data) => {
    data = JSON.parse(data);
    if (data['action'] == 'update') {
      updateJournal(data['data'])
      broadcast(state);
    } else if (data['action'] == 'clear') {
      state = initState();
      broadcast(state);
    }
  })

  ws.on('close', (e) => {
    console.log('Socket is closed.')
    fyiConnection = null;
    if (roomCode) {
      console.log('Reconnect will be attempted in 1 second.', e.reason)
      setTimeout(() => {
        fyiConnection = connectFyi(roomCode);
      }, 1000)
    }
  })

  ws.on('error', (err) => {
    console.error(`Socket encountered error: ${err.message} Closing socket`)
    ws.close()
  })

  return ws
}

const broadcast = (status) => {
  for (let client of expressWs.getWss().clients) {
    client.send(JSON.stringify({ update: status }))
  }
}

app.get('/join-room', function (req, res) {
  let newRoomCode = req.query.roomCode
  if (fyiConnection !== null && newRoomCode != roomCode) {
    fyiConnection.close();
    fyiConnection = null;
  }

  if (newRoomCode && newRoomCode != roomCode) {
    fyiConnection = connectFyi(newRoomCode);
  }
  roomCode = newRoomCode
  res.render('join-room', { 'roomCode': roomCode })
})

app.post('/', (req, res) => {
  res.sendStatus(200)
  Object.entries(req.body).map(([key, value], idx) => {
    if (key === "journal") {
      let newState = value.split(',').map((value, idx) => parseInt(value, 10))
      updateJournal(newState)
    } else {
      state[key] = tryInt(value)
    }
  })
  console.log('Got journal data from livesplit')
  if (fyiConnection !== null) {
    console.log('Relaying state to spelunky.fyi')
    fyiConnection.send(JSON.stringify({
      'action': 'update',
      'data': state['journal']
    }))
  }
  broadcast(state)
})

app.post('/clear', (req, res) => {
  res.sendStatus(200)
  console.log('Got request to clear journal')
  state = initState();
  broadcast(state);
  if (fyiConnection !== null) {
    console.log('Clearing state to spelunky.fyi')
    fyiConnection.send(JSON.stringify({
      'action': 'clear',
    }))
  }
})

app.ws('/', (ws, req) => {
  ws.on('message', (msg) => {
    console.log('Client is asking for', msg)
    if (msg == 'state') {
      ws.send(JSON.stringify({ state: state }))
    }
  })
})


const parser = new ArgumentParser({
  description: 'Spelunky 2 RTA Tracker'
});

parser.add_argument('-v', '--version', { action: 'version', version });
parser.add_argument('-p', '--port', { type: 'int', help: 'Port to listen on', default: 27122 });

const args = parser.parse_args();

var server = app.listen(args.port, function () {
  var port = server.address().port
  console.log(`Tracker is listening on http://localhost:${port}`)
  console.log(`If playing co-op join a room at http://localhost:${port}/join-room`)
  open(`http://localhost:${port}`)
})
