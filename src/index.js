import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from '../src/Calculator.js';

$("form#user-info").submit(function(e) {
  e.preventDefault();
  const parseAge = parseInt($("#age").val());
  const name = $("#name").val();
  const earthAge = (2021-parseAge);
  const selectedPlanet = $("#planet").val();
  const userLifeExpectancy = 75;
  const calculator = new Calculator(earthAge, selectedPlanet, userLifeExpectancy);
  const planetAge = calculator.alienAge();
  const planetLifeExpectancy = calculator.deathYear();
  $(".user-info").hide();
  $(".age-revealer").show();
  $("#user-name").text(name);
  $("#selected-planet").text(selectedPlanet);
  $("#planet-age").text(planetAge);
  $("#life-expectancy").text(planetLifeExpectancy);

});
  
  


