// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>ES6 Symbols: See the output in cosnole</h1>`;

//--- Symbol creation
{
  console.log('**** Symbol creation ****');
  let aSymbol = Symbol('A Symbol');
  console.log(aSymbol);
  console.log(aSymbol.toString());
  console.log(Symbol('A Symbol').toString() === 'Symbol(A Symbol)')
}


//--- enum with constants
{
  console.log('**** enum with constants ****');
  let PLANET_MERCURY = Symbol('Mercury');
  let PLANET_MARS = Symbol('Mars');
  let PLANET_VENUS = Symbol('Venus');
  let PLANET_EARTH  = Symbol('Earth');
  let PLANET_NEPTUNE   = Symbol('Neptune');
  let PLANET_URANUS = Symbol('Uranus');
  let PLANET_SATURN = Symbol('Saturn');
  let PLANET_JUPITER = Symbol('Jupiter');

  function getPlanetInformation(planet) {
      switch (planet) {
          case PLANET_MERCURY:
              return `Mercury is 38% the size of Earth. It is 2,440 km / 1,516 miles`;
          case PLANET_MARS:
              return `Mars is 53% the size of Earth. It is 3,390 km / 2,460 miles`;
          case PLANET_VENUS:
              return `Venus is 95% the size of Earth. It is 6,052 km / 3,761 miles`;
          case PLANET_EARTH:
              return `We live here, this is Earth. It is 6,371 km / 3,959 miles`;
          case PLANET_NEPTUNE:
              return `Neptune is 388% the size of Earth. It is 24,622 km / 15,299 miles`;
          case PLANET_URANUS:
              return `Uranus is 400% the size of Earth. It is 25,362 km / 15,759 miles`;
          case PLANET_SATURN:
              return `Saturn is 945% the size of Earth. It is 58,232 km / 36,184 miles`;
          case PLANET_JUPITER:
              return `Jupiter is 1,120% the size of Earth. It is 69,911 km / 43,441 miles`;
          default:
              return `Unknown planet: ${planet.toString()}. Mostly Alien lives there!!`;
      }
  }
  console.log(getPlanetInformation(PLANET_JUPITER));
  console.log(getPlanetInformation(Symbol('Jupiter')));
}

//--- Coorce Symbol to string => not possible
{
  console.log('**** Coorce Symbol to string => not possible ****');
  let testSym = Symbol('testSym');
  // let str1 = testSym + '';
  // let str2 = `${testSym}`;
  let str1 = String(testSym); // explicit coversion
  console.log(str1);
  console.log(testSym === str1); // not equal
  console.log(testSym.toString()); // another way of explicit conversion
}

//--- primitive and unique
{
  console.log('**** Primitive and Unique ****');
  console.log('Are they same?', Symbol() === Symbol());
  console.log('type of Symbol is', typeof Symbol());
}

//--- Symbol as property keys
{
  console.log('**** Symbol as property keys ****');
  let MY_KEY_SYM = Symbol();
  let obj = {
    [MY_KEY_SYM] : 'Tapas'
  }
  console.log(obj[MY_KEY_SYM]);
  let obj2 = {
    [MY_KEY_SYM](){
      return 'GreenRoots'
    }
  }
  console.log(obj2[MY_KEY_SYM]());
}

//--- Enumerating own property keys 
{
  console.log('**** Enumerating own property keys ****');
  let obj = {
    [Symbol('name')]: 'Tapas',
    'address': 'India'
  };

  console.log(Object.getOwnPropertyNames(obj));
  console.log(Object.getOwnPropertySymbols(obj));
  console.log(Reflect.ownKeys(obj));
  console.log(Object.keys(obj));
}

//--- Type conversion
{
  console.log('**** Type conversion ****');
  let mySymb = Symbol('My Symbol');
  console.log(!mySymb);
  console.log(Boolean(mySymb));
}

//--- Wrapper
{
  console.log('**** Wrapper ****');
  let sym = Symbol('My Symbol');
  let wrapper = Object(sym);
  console.log(typeof wrapper);
  console.log(wrapper instanceof Symbol);
  console.log(wrapper instanceof Object);

  let name = Symbol('name');
  let obj = {
    [name] : 'Tapas',
    'address': 'India'
  }
  let wrap = Object(name);
  console.log(obj[wrap]);
}

// Symbol from the global registry
console.log(Symbol('aSymbol') === Symbol('aSymbol'));
console.log(Symbol.for('aSymbol') === Symbol.for('aSymbol'));

let globalASymbolSym = Symbol.for('aSymbol');
let localASymbolSym = Symbol('aSymbol');
console.log(Symbol.keyFor(globalASymbolSym));
console.log(Symbol.keyFor(localASymbolSym));





