import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("form#userAge").submit(function(e) {
    e.preventDefault();
    $(".age-page").hide();
    $(".planet-page").show();
  
  });
});


