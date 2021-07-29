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
    } else if (this.selectedPlanet === 'VENUS'){
      let venusAge = (this.earthAge * .6164);
      return venusAge;
    } else if (this.selectedPlanet === 'MARS'){
      let marsAge = (this.earthAge * 1.8821);
      return marsAge;
    } else if (this.selectedPlanet === 'JUPITER'){
      let jupiterAge = (this.earthAge * 12);
      return jupiterAge;
    }
  }
  deathYear = () => {
    if(this.selectedPlanet === 'MERCURY'){
      if(this.earthAge < this.userLifeExpectancy) {
        let yearsExpected = ((this.userLifeExpectancy - this.earthAge) * .241);
        return yearsExpected;
      } else if(this.earthAge > this.userLifeExpectancy) {
        let yearsPastExpected = ((this.earthAge - this.userLifeExpectancy) * .241);
        return yearsPastExpected;
      } else if(this.earthAge === this.userLifeExpectancy) {
        const warning = "You better watch it bud. You're livin' on borrowed time!";
        return warning;
      }
    } else if(this.selectedPlanet === 'VENUS'){
      if(this.earthAge < this.userLifeExpectancy) {
        let yearsExpected = ((this.userLifeExpectancy - this.earthAge) * .6164);
        return yearsExpected;
      } else if(this.earthAge > this.userLifeExpectancy) {
        let yearsPastExpected = ((this.earthAge - this.userLifeExpectancy) * .6164);
        return yearsPastExpected;
      } else if(this.earthAge === this.userLifeExpectancy) {
        const warning = "You better watch it bud. You're livin' on borrowed time!";
        return warning;
      }
    } else if(this.selectedPlanet === 'MARS'){
      if(this.earthAge < this.userLifeExpectancy) {
        let yearsExpected = ((this.userLifeExpectancy - this.earthAge) * 1.8821);
        return yearsExpected;
      } else if(this.earthAge > this.userLifeExpectancy) {
        let yearsPastExpected = ((this.earthAge - this.userLifeExpectancy) * 1.8821);
        return yearsPastExpected;
      } else if(this.earthAge === this.userLifeExpectancy) {
        const warning = "You better watch it bud. You're livin' on borrowed time!";
        return warning;
      }
    } else if(this.selectedPlanet === 'JUPITER'){
      if(this.earthAge < this.userLifeExpectancy) {
        let yearsExpected = ((this.userLifeExpectancy - this.earthAge) * .12);
        return yearsExpected;
      } else if(this.earthAge > this.userLifeExpectancy) {
        let yearsPastExpected = ((this.earthAge - this.userLifeExpectancy) * .12);
        return yearsPastExpected;
      } else if(this.earthAge === this.userLifeExpectancy) {
        const warning = "You better watch it bud. You're livin' on borrowed time!";
        return warning;
      }
    }
  }
}