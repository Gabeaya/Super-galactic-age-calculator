import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$("form#userAge").submit(function(e) {
  e.preventDefault();
  const parseAge = parseInt($("#age").val());
  const name = $("#name").val();
  const age = (2021-parseAge);
  const planet = $("#planet").val();
  $(".user-info").hide();
  $(".age-revealer").show();
  $("#user-name").text(name)
  $("#selected-planet").text(planet);
});
  
  


