import Calculator from '../src/Calculator.js';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator( 25,'Mars', 65);
  });
  
  test('should be able to hold three parameters: given earth age, the selected planet, the users life expectancy', () => {
    expect(calculator.earthAge).toEqual(25);
    expect(calculator.selectedPlanet).toEqual('Mars');
    expect(calculator.userLifeExpectancy).toEqual(65);

  });
});
