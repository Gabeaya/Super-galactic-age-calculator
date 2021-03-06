import Calculator from '../src/Calculator.js';

describe('Calculator', () => {
  let calculator;
  let marsCalculator;

  beforeEach(() => {
    calculator = new Calculator('','','');
    marsCalculator = new Calculator( 75,'MARS', 75);


  });
  
  test('should be able to hold three parameters: given earth age, the selected planet, the users life expectancy', () => {
    expect(calculator.earthAge).toEqual('');
    expect(calculator.selectedPlanet).toEqual('');
    expect(calculator.userLifeExpectancy).toEqual('');
  });
  test('should correctly return calculated age of a person on Mars', () => {
    expect(marsCalculator.alienAge()).toEqual(39);
  });
  test('should correctly return calculated age of a person on Mercury', () => {
    const mercury = new Calculator(75, 'MERCURY',75);
    expect(mercury.alienAge()).toEqual(311);
  });
  test('should correctly return calculated age of a person on Venus', () => {
    const venus = new Calculator(20, 'VENUS', 75);
    expect(venus.alienAge()).toEqual(32)
  });
  test('should correctly return calculated age of a person on Jupiter', () => {
    const jupiter = new Calculator(20, 'JUPITER', 75);
    expect(jupiter.alienAge()).toEqual(1);
  });
  test('should inform user of how many years they would have left or how many they lived past expectation on a given planet', () => {
    let mercury = new Calculator(1, 'MERCURY', 2);
    expect(mercury.deathYear()).toEqual(4);
  });
  test('should inform user of how many years they would have left or how many they lived past expectation on a given planet', () => {
    let mercury = new Calculator(2, 'MERCURY', 1);
    expect(mercury.deathYear()).toEqual(4);
  });
  test('should inform user of how many years they would have left or how many they lived past expectation on a given planet', () => {
    let mercury = new Calculator(2, 'MERCURY', 2);
    expect(mercury.deathYear()).toEqual("You better watch it bud. You're livin' on borrowed time!");
  });
  test('should inform user of how many years they would have left or how many they lived past expectation on a given planet', () => {
    let venus = new Calculator(1, 'VENUS', 3);
    expect(venus.deathYear()).toEqual(3.);
  });
  test('should inform user of how many years they would have left or how many they lived past expectation on a given planet', () => {
    let venus = new Calculator(3, 'VENUS', 1);
    expect(venus.deathYear()).toEqual(3);
  });
  test('should inform user of how many years they would have left or how many they lived past expectation on a given planet', () => {
    let venus = new Calculator(1, 'VENUS', 1);
    expect(venus.deathYear()).toEqual("You better watch it bud. You're livin' on borrowed time!");
  });
  test('should inform user of how many years they would have left or how many they lived past expectation on a given planet', () => {
    let mars = new Calculator(1, 'MARS', 3);
    expect(mars.deathYear()).toEqual(1);
  });
  test('should inform user of how many years they would have left or how many they lived past expectation on a given planet', () => {
    let mars = new Calculator(3, 'MARS', 1);
    expect(mars.deathYear()).toEqual(1);
  });
  test('should inform user of how many years they would have left or how many they lived past expectation on a given planet', () => {
    let mars = new Calculator(3, 'MARS', 3);
    expect(mars.deathYear()).toEqual("You better watch it bud. You're livin' on borrowed time!");
  });
  test('should inform user of how many years they would have left or how many they lived past expectation on a given planet', () => {
    let jupiter = new Calculator(1, 'JUPITER', 3);
    expect(jupiter.deathYear()).toEqual(0);
  });
  test('should inform user of how many years they would have left or how many they lived past expectation on a given planet', () => {
    let jupiter = new Calculator(3, 'JUPITER', 1);
    expect(jupiter.deathYear()).toEqual(0);
  });
  test('should inform user of how many years they would have left or how many they lived past expectation on a given planet', () => {
    let jupiter = new Calculator(3, 'JUPITER', 3);
    expect(jupiter.deathYear()).toEqual("You better watch it bud. You're livin' on borrowed time!");
  });
});
