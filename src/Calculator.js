export default class Calculator {
  constructor(earthAge, selectedPlanet, userLifeExpectancy) {
    this.earthAge = earthAge;
    this.selectedPlanet = selectedPlanet;
    this.userLifeExpectancy = userLifeExpectancy;
  }
  alienAge = () => {
    if (this.selectedPlanet === 'MERCURY'){
      let mercuryAge = (this.earthAge * .241);
      return mercuryAge;
      //return ('You are ' + mercuryAge + ' on Mercury.')
    } else if (this.selectedPlanet === 'VENUS'){
      let venusAge = (this.earthAge * .6164);
      return venusAge;
      //return ('You are ' + venusAge + ' on Venus.');
    } else if (this.selectedPlanet === 'MARS'){
      let marsAge = (this.earthAge * 1.8821);
      return marsAge;
      //return ('You are ' + marsAge + ' on Mars.'); 
    } else if (this.selectedPlanet === 'JUPITER'){
      let jupiterAge = (this.earthAge * 12);
      return jupiterAge;
      //return ('You are ' + jupiterAge + ' on Jupiter.')
    }
  }
}