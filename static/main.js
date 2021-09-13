const container = document.getElementById('container')
var hash = window.location.hash.substr(1).toLowerCase()

const AREAS = {
  MISC: 0,
  DWELLING: 1,
  JUNGLE: 2,
  VOLCANA: 3,
  OLMECS_LAIR: 4,
  TIDE_POOL: 5,
  ABZU: 6,
  TEMPLE_OF_ANUBIS: 7,
  CITY_OF_GOLD: 8,
  DUAT: 9,
  ICE_CAVES: 10,
  NEO_BABYLON: 11,
  TIAMATS_THRONE: 12,
  SUNKEN_CITY: 13,
  EGGPLANT_WORLD: 14,
  HUNDUNS_HIDEAWAY: 15,
  COSMIC_OCEAN: 16,
}

var journal = {
  'Places': {
    'offset': 0, 'size': 16, 'num': 0, 'found': 0, 'entries': [
      { 'name': 'Dwelling', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Jungle', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Volcana', 'found': 0, 'area': AREAS.VOLCANA },
      { 'name': 'Olmec\'s Lair', 'found': 0, 'area': AREAS.OLMECS_LAIR },
      { 'name': 'Tide Pool', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Abzu', 'found': 0, 'area': AREAS.ABZU },
      { 'name': 'Temple of Anubis', 'found': 0, 'area': AREAS.TEMPLE_OF_ANUBIS },
      { 'name': 'City of Gold', 'found': 0, 'area': AREAS.CITY_OF_GOLD },
      { 'name': 'Duat', 'found': 0, 'area': AREAS.DUAT },
      { 'name': 'Ice Caves', 'found': 0, 'area': AREAS.ICE_CAVES },
      { 'name': 'Neo Babylon', 'found': 0, 'area': AREAS.NEO_BABYLON },
      { 'name': 'Tiamat\'s Throne', 'found': 0, 'area': AREAS.TIAMATS_THRONE },
      { 'name': 'Sunken City', 'found': 0, 'area': AREAS.SUNKEN_CITY },
      { 'name': 'Eggplant World', 'found': 0, 'area': AREAS.EGGPLANT_WORLD },
      { 'name': 'Hundun\'s Hideaway', 'found': 0, 'area': AREAS.HUNDUNS_HIDEAWAY },
      { 'name': 'Cosmic Ocean', 'found': 0, 'area': AREAS.COSMIC_OCEAN }
    ]
  },
  'Bestiary': {
    'offset': 16, 'size': 78, 'num': 2, 'found': 0, 'entries': [
      { 'name': 'Snake', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Spider', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Bat', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Caveman', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Skeleton', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Horned Lizard', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Cave Mole', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Quillback', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Mantrap', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Tiki man', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Witch Doctor', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Mosquito', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Monkey', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Hang Spider', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Giant Spider', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Magmar', 'found': 0, 'area': AREAS.VOLCANA },
      { 'name': 'Robot', 'found': 0, 'area': AREAS.VOLCANA },
      { 'name': 'Fire Bug', 'found': 0, 'area': AREAS.VOLCANA },
      { 'name': 'Imp', 'found': 0, 'area': AREAS.VOLCANA },
      { 'name': 'Lavamander', 'found': 0, 'area': AREAS.VOLCANA },
      { 'name': 'Vampire', 'found': 0, 'area': AREAS.VOLCANA },
      { 'name': 'Vlad', 'found': 0, 'area': AREAS.VOLCANA },
      { 'name': 'Olmec', 'found': 0, 'area': AREAS.OLMECS_LAIR },
      { 'name': 'Jiangshi', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Jiangshi Assassin', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Flying Fish', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Octopy', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Hermit Crab', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Pangxie', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Great Humphead', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Kingu', 'found': 0, 'area': AREAS.ABZU },
      { 'name': 'Crocman', 'found': 0, 'area': AREAS.TEMPLE_OF_ANUBIS },
      { 'name': 'Cobra', 'found': 0, 'area': AREAS.TEMPLE_OF_ANUBIS },
      { 'name': 'Mummy', 'found': 0, 'area': AREAS.CITY_OF_GOLD },
      { 'name': 'Sorceress', 'found': 0, 'area': AREAS.TEMPLE_OF_ANUBIS },
      { 'name': 'Cat Mummy', 'found': 0, 'area': AREAS.TEMPLE_OF_ANUBIS },
      { 'name': 'Necromancer', 'found': 0, 'area': AREAS.TEMPLE_OF_ANUBIS },
      { 'name': 'Anubis', 'found': 0, 'area': AREAS.TEMPLE_OF_ANUBIS },
      { 'name': 'Ammit', 'found': 0, 'area': AREAS.DUAT },
      { 'name': 'Apep', 'found': 0, 'area': AREAS.DUAT },
      { 'name': 'Anubis II', 'found': 0, 'area': AREAS.DUAT },
      { 'name': 'Osiris', 'found': 0, 'area': AREAS.DUAT },
      { 'name': 'UFO', 'found': 0, 'area': AREAS.ICE_CAVES },
      { 'name': 'Alien', 'found': 0, 'area': AREAS.ICE_CAVES },
      { 'name': 'Yeti', 'found': 0, 'area': AREAS.ICE_CAVES },
      { 'name': 'Yeti King', 'found': 0, 'area': AREAS.ICE_CAVES },
      { 'name': 'Yeti Queen', 'found': 0, 'area': AREAS.ICE_CAVES },
      { 'name': 'Lahamu', 'found': 0, 'area': AREAS.ICE_CAVES },
      { 'name': 'Proto Shopkeeper', 'found': 0, 'area': AREAS.ICE_CAVES },
      { 'name': 'Olmite', 'found': 0, 'area': AREAS.NEO_BABYLON },
      { 'name': 'Lamassu', 'found': 0, 'area': AREAS.NEO_BABYLON },
      { 'name': 'Tiamat', 'found': 0, 'area': AREAS.TIAMATS_THRONE },
      { 'name': 'Tadpole', 'found': 0, 'area': AREAS.SUNKEN_CITY },
      { 'name': 'Frog', 'found': 0, 'area': AREAS.SUNKEN_CITY },
      { 'name': 'Fire Frog', 'found': 0, 'area': AREAS.SUNKEN_CITY },
      { 'name': 'Goliath Frog', 'found': 0, 'area': AREAS.SUNKEN_CITY },
      { 'name': 'Grub', 'found': 0, 'area': AREAS.SUNKEN_CITY },
      { 'name': 'Giant Fly', 'found': 0, 'area': AREAS.SUNKEN_CITY },
      { 'name': 'Hundun', 'found': 0, 'area': AREAS.HUNDUNS_HIDEAWAY },
      { 'name': 'Eggplant Minister', 'found': 0, 'area': AREAS.EGGPLANT_WORLD },
      { 'name': 'Eggplup', 'found': 0, 'area': AREAS.EGGPLANT_WORLD },
      { 'name': 'Celestial Jelly', 'found': 0, 'area': AREAS.COSMIC_OCEAN },
      { 'name': 'Scorpion', 'found': 0, 'area': AREAS.TIAMATS_THRONE },
      { 'name': 'Bee', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Queen Bee', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Scarab', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Golden Monkey', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Leprechaun', 'found': 0, 'area': AREAS.CITY_OF_GOLD },
      { 'name': 'Monty', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Percy', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Poochi', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Ghist', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Ghost', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Cave Turkey', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Rock Dog', 'found': 0, 'area': AREAS.VOLCANA },
      { 'name': 'Axolotl', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Qilin', 'found': 0, 'area': AREAS.NEO_BABYLON },
      { 'name': 'Mech Rider', 'found': 0, 'area': AREAS.ICE_CAVES }
    ]
  },
  'People': {
    'offset': 94, 'size': 38, 'num': 1, 'found': 0, 'entries': [
      { 'name': 'Ana', 'found': 1, 'area': AREAS.MISC },
      { 'name': 'Margaret', 'found': 1, 'area': AREAS.MISC },
      { 'name': 'Colin', 'found': 1, 'area': AREAS.MISC },
      { 'name': 'Roffy', 'found': 1, 'area': AREAS.MISC },
      { 'name': 'Alto', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Liz', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Nekka', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'LISE', 'found': 0, 'area': AREAS.VOLCANA },
      { 'name': 'Coco', 'found': 0, 'area': AREAS.VOLCANA },
      { 'name': 'Manfred', 'found': 0, 'area': AREAS.OLMECS_LAIR },
      { 'name': 'Jay', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Tina', 'found': 0, 'area': AREAS.ABZU },
      { 'name': 'Valerie', 'found': 0, 'area': AREAS.TEMPLE_OF_ANUBIS },
      { 'name': 'Au', 'found': 0, 'area': AREAS.CITY_OF_GOLD },
      { 'name': 'Demi', 'found': 0, 'area': AREAS.ICE_CAVES },
      { 'name': 'Pilot', 'found': 0, 'area': AREAS.ICE_CAVES },
      { 'name': 'Airyn', 'found': 0, 'area': AREAS.NEO_BABYLON },
      { 'name': 'Dirk', 'found': 0, 'area': AREAS.SUNKEN_CITY },
      { 'name': 'Guy', 'found': 0, 'area': AREAS.TIAMATS_THRONE },
      { 'name': 'Classic', 'found': 0, 'area': AREAS.HUNDUNS_HIDEAWAY },
      { 'name': 'Terra', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'HH', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Eggpants', 'found': 0, 'area': AREAS.ICE_CAVES },
      { 'name': 'Shoppie', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Tun', 'found': 0, 'area': AREAS.VOLCANA },
      { 'name': 'Yang', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Tusk', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Bodyguard', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Waddler', 'found': 0, 'area': AREAS.OLMECS_LAIR },
      { 'name': 'Caveman Shoppie', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Ghist Shoppie', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Van Horsing', 'found': 0, 'area': AREAS.VOLCANA },
      { 'name': 'Parsley', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Parsnip', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Parmesan', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Sparrow', 'found': 0, 'area': AREAS.VOLCANA },
      { 'name': 'Beg', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Yama', 'found': 0, 'area': AREAS.EGGPLANT_WORLD }
    ]
  },
  'Items': {
    'offset': 132, 'size': 54, 'num': 3, 'found': 0, 'entries': [
      { 'name': 'Rope Pile', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Bomb Bag', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Bomb Box', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Paste', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Spectacles', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Climbing Gloves', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Pitcher\'s Mitt', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Spring Shoes', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Spike Shoes', 'found': 0, 'area': AREAS.ICE_CAVES },
      { 'name': 'Compass', 'found': 0, 'area': AREAS.ICE_CAVES },
      { 'name': 'Alien Compass', 'found': 0, 'area': AREAS.TEMPLE_OF_ANUBIS },
      { 'name': 'Parachute', 'found': 0, 'area': AREAS.OLMECS_LAIR },
      { 'name': 'Udjat Eye', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Kapala', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Hedjet', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Crown', 'found': 0, 'area': AREAS.VOLCANA },
      { 'name': 'Eggplant Crown', 'found': 0, 'area': AREAS.EGGPLANT_WORLD },
      { 'name': 'The True Crown', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Ankh', 'found': 0, 'area': AREAS.OLMECS_LAIR },
      { 'name': 'Tablet of Destiny', 'found': 0, 'area': AREAS.DUAT },
      { 'name': 'Skeleton Key', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Royal Jelly', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Cape', 'found': 0, 'area': AREAS.VOLCANA },
      { 'name': 'Vlad\'s Cape', 'found': 0, 'area': AREAS.VOLCANA },
      { 'name': 'Jetpack', 'found': 0, 'area': AREAS.DUAT },
      { 'name': 'Telepack', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Hoverpack', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Powerpack', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Webgun', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Shotgun', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Freeze Ray', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Clone Gun', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Crossbow', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Camera', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Teleporter', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Mattock', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Boomerang', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Machete', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Excalibur', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Broken Sword', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Plasma Cannon', 'found': 0, 'area': AREAS.ICE_CAVES },
      { 'name': 'Scepter', 'found': 0, 'area': AREAS.TEMPLE_OF_ANUBIS },
      { 'name': 'Hou Yi\'s Bow', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Arrow of Light', 'found': 0, 'area': AREAS.SUNKEN_CITY },
      { 'name': 'Wooden Shield', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Metal Shield', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Idol', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'The Tusk Idol', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Curse Pot', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Ushabti', 'found': 0, 'area': AREAS.NEO_BABYLON },
      { 'name': 'Eggplant', 'found': 0, 'area': AREAS.MISC },
      { 'name': 'Cooked Turkey', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Elixir', 'found': 0, 'area': AREAS.TEMPLE_OF_ANUBIS },
      { 'name': 'Four-Leaf Clover', 'found': 0, 'area': AREAS.JUNGLE }
    ]
  },
  'Traps': {
    'offset': 186, 'size': 24, 'num': 4, 'found': 0, 'entries': [
      { 'name': 'Spikes', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Arrow Trap', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Totem Trap', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Log Trap', 'found': 0, 'area': AREAS.DWELLING },
      { 'name': 'Spear Trap', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Thorny Trap', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Bear Trap', 'found': 0, 'area': AREAS.JUNGLE },
      { 'name': 'Powder Box', 'found': 0, 'area': AREAS.VOLCANA },
      { 'name': 'Falling Platform', 'found': 0, 'area': AREAS.VOLCANA },
      { 'name': 'Spikeball', 'found': 0, 'area': AREAS.VOLCANA },
      { 'name': 'Lion Trap', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Giant Clam', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Sliding Wall', 'found': 0, 'area': AREAS.TIDE_POOL },
      { 'name': 'Crush Trap', 'found': 0, 'area': AREAS.TEMPLE_OF_ANUBIS },
      { 'name': 'Giant Crush Trap', 'found': 0, 'area': AREAS.TEMPLE_OF_ANUBIS },
      { 'name': 'Boulder', 'found': 0, 'area': AREAS.ICE_CAVES },
      { 'name': 'Spring Trap', 'found': 0, 'area': AREAS.ICE_CAVES },
      { 'name': 'Landmine', 'found': 0, 'area': AREAS.ICE_CAVES },
      { 'name': 'Laser Trap', 'found': 0, 'area': AREAS.NEO_BABYLON },
      { 'name': 'Spark Trap', 'found': 0, 'area': AREAS.NEO_BABYLON },
      { 'name': 'Frog Trap', 'found': 0, 'area': AREAS.SUNKEN_CITY },
      { 'name': 'Sticky Trap', 'found': 0, 'area': AREAS.SUNKEN_CITY },
      { 'name': 'Bone Drop', 'found': 0, 'area': AREAS.SUNKEN_CITY },
      { 'name': 'Egg Sac', 'found': 0, 'area': AREAS.SUNKEN_CITY }
    ]
  }
}
var state = {}

const entryCount = (entries) => {
  return entries.reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

const found = (cat, i, f) => {
  f = parseInt(f)
  var item = journal[cat].entries[i]
  item.found = f
  var el = document.querySelector('.' + getId(item.name))
  var expectedClass = f ? "done" : "notDone"
  var unexpectedClass = f ? "notDone" : "done"
  if (el) {
    if (!el.classList.contains(expectedClass)) {
      el.classList.add(expectedClass)
      el.classList.remove(unexpectedClass)
    }
  }
  var num = 0
  for (let i of journal[cat].entries) {
    if (i.found) num++
  }
  journal[cat].found = num
  if (hash != 'area' && hash != 'char') {
    var cel = document.querySelector('#' + getId(cat) + ' .found')
    if (cel)
      cel.innerHTML = journal[cat].found
  } else if (hash == 'char') {
    var cel = document.querySelector('#' + getId(cat) + ' .found')
    if (cel)
      cel.innerHTML = countChars()
  }
}

const toggleItem = (cat, i) => {
  var item = journal[cat].entries[i]
  var f = item.found ? 0 : 1
  found(cat, i, f)
}

const getId = (item) => {
  return item.toString().toLowerCase().replace(/[^a-z]*/g, '')
}

const countChars = () => {
  var num = 0
  for (let i = 0; i < 20; i++) {
    if (journal.People.entries[i].found) num++
  }
  return num
}

const getPercent = () => {
  var num = 0
  if (hash == 'char') {
    for (let i = 0; i < 20; i++) {
      if (journal.People.entries[i].found) num++
    }
    return Math.floor(num / 20 * 100) + '%'
  }
  var data = state.journal
  for (let i of data) {
    num += parseInt(i)
  }
  return Math.floor(num / 210 * 100) + '%'
}

const getCat = (cat) => {
  if (!document.getElementById(getId(cat))) {
    var el = document.createElement('div')
    var head = document.createElement('h2')
    head.className = 'header'
    if (hash == 'area')
      head.style.display = 'none'
    var name = document.createElement('span')
    name.className = 'name'
    if (hash == 'char')
      name.innerHTML = 'Chars'
    else
      name.innerHTML = cat
    head.appendChild(name)
    var progress = document.createElement('span')
    progress.className = 'progress'
    if (hash != 'area' && hash != 'char') {
      name.onclick = function () { window.location.hash = this.innerHTML.toLowerCase() }
      var found = document.createElement('span')
      found.className = 'found'
      if (hash != 'area')
        found.innerHTML = journal[cat].found
      var slash = document.createElement('span')
      slash.innerHTML = '/'
      var total = document.createElement('span')
      total.className = 'total'
      if (hash != 'area')
        total.innerHTML = journal[cat].size
      progress.appendChild(found)
      progress.appendChild(slash)
      progress.appendChild(total)
    } else if (hash == 'char') {
      var found = document.createElement('span')
      found.className = 'found'
      found.innerHTML = countChars()
      var slash = document.createElement('span')
      slash.innerHTML = '/20'
      progress.appendChild(found)
      progress.appendChild(slash)
    }
    head.appendChild(progress)
    el.id = getId(cat)
    el.className = 'cat'
    if (hash != 'area' && hash != 'char')
      el.style.order = journal[cat].num
    el.appendChild(head)
    var items = document.createElement('div')
    items.className = 'items'
    el.appendChild(items)
    getJournal().appendChild(el)
  }
  return document.querySelector('#' + getId(cat) + ' .items')
}

const getItem = (cat, acat, item, n, f, a, num) => {
  if (!document.querySelector('.' + getId(item)) && hash != 'char' || (cat == 'People' && n < 20)) {
    if (hash == 'area')
      var items = getCat(acat)
    else
      var items = getCat(cat)
    if ((getId(item) == 'quillback' || getId(item) == 'terra') && hash != 'area') {
      var br = document.createElement('div')
      br.className = 'break'
      items.appendChild(br)
    }
    var el = document.createElement('img')
    el.src = 'img/' + getId(item) + '.png'
    el.alt = item
    el.title = item
    //el.style.display = (f ? 'none' : 'inline-block')
    el.className = 'item ' + getId(item)
    el.dataset.cat = cat
    el.dataset.acat = acat
    el.dataset.item = item
    el.dataset.area = a
    el.dataset.n = n
    el.onclick = function () { toggleItem(this.dataset.cat, parseInt(this.dataset.n), 1) }
    if (hash == 'area')
      el.style.order = num * 100 + n
    if (!document.getElementById('percent') && (acat == 'Generic' && hash == 'area')) {
      var perc = document.createElement('div')
      perc.id = 'percent'
      perc.innerHTML = getPercent()
      items.appendChild(perc)
    }
    items.appendChild(el)
  }
  if (hash != 'char' || (cat == 'People' && n < 20))
    return document.querySelector('.' + getId(item))
}

const updateJournal = () => {
  found('Places', 0, 0)
  var data = state.journal
  var areafound = []
  var areatotal = []
  for (let [name, cat] of Object.entries(journal)) {
    if (name == 'Places') continue
    const entries = data.slice(cat.offset, cat.offset + cat.size)
    var n = 0
    for (let entry of cat.entries) {
      if (!areafound[entry.area]) areafound[entry.area] = 0
      if (!areatotal[entry.area]) areatotal[entry.area] = 0
      if (parseInt(entries[n]) > 0) areafound[entry.area]++
      areatotal[entry.area]++
      n++
    }
  }
  for (let [name, cat] of Object.entries(journal)) {
    const entries = data.slice(cat.offset, cat.offset + cat.size)
    journal[name].found = entryCount(entries)
    for (let i = 0; i < entries.length; ++i) {
      var area = journal[name].entries[i].area
      if (parseInt(entries[i]) == 0) {
        found(name, i, entries[i])
      } else if (name != 'Places') {
        found(name, i, entries[i])
      } else if (name == 'Places' && areafound[area] >= areatotal[area]) {
        found(name, i, entries[i])
      }
    }
  }
  var perc = document.getElementById('percent')
  if (perc) perc.innerHTML = getPercent()
}

const hashChange = () => {
  hash = window.location.hash.substr(1).toLowerCase()
  if (hash) {
    if (hash != 'area' && hash != 'char') {
      document.querySelectorAll('.cat').forEach((cat) => {
        if (cat.id != hash) {
          cat.style.display = 'none'
        } else {
          cat.style.display = 'block'
        }
      })
    }
  }
}
window.addEventListener('hashchange', function () {
  window.location.reload()
}, false)

const getJournal = () => {
  if (!document.getElementById('journal')) {
    var el = document.createElement('div')
    el.id = 'journal'
    if (!document.getElementById('percent') && hash != 'area' && hash != 'char') {
      var perc = document.createElement('div')
      perc.id = 'percent'
      perc.innerHTML = getPercent()
      perc.style.textAlign = 'right'
      perc.style.width = '150px'
      perc.style.fontSize = '24px'
      el.appendChild(perc)
    }
    container.appendChild(el)
    var data = state.journal
    for (let [name, cat] of Object.entries(journal)) {
      var n = 0
      for (let entry of cat.entries) {
        if (entry.area > 0)
          areaname = journal.Places.entries[entry.area - 1].name
        else
          areaname = 'Generic'
        getItem(name, areaname, entry.name, n++, entry.found, entry.area, cat.num)
      }
    }
  }
  hashChange()
  updateJournal()
  return document.getElementById('journal')
}

const connect = () => {
  var ws = new WebSocket('ws://' + window.location.hostname + ':' + window.location.port + '/')
  ws.onopen = () => {
    console.log('WebSocket opened')
    ws.send('state')
  }
  ws.onmessage = (e) => {
    let data = JSON.parse(e.data)
    if (data['state']) {
      state = data['state']
    } else if (data['update']) {
      state = data['update']
    }
    getJournal()
    updateJournal()
  }
  ws.onclose = (e) => {
    console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason)
    setTimeout(() => {
      connect()
    }, 1000)
  }
  ws.onerror = (err) => {
    console.error('Socket encountered error: ', err.message, 'Closing socket')
    ws.close()
  };
  return ws
}
const init = () => {
  var ws = connect()
}
init()
