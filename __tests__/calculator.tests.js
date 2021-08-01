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
  test('should correctly return calculated age of planet a person on Mars', () => {
    expect(marsCalculator.alienAge()).toEqual(39.84910472344721);
  })
  test('should inform user of how many years they would have left or how many they lived past expectation on a given planet', () => {
    expect(marsCalculator.deathYear()).toEqual("You better watch it bud. You're livin' on borrowed time!");
  })
});
