import { Entry } from "./journal.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

function makeCard(entry){
  let emptyCard = "<div class='card' style='width: 18rem;'><div class='card-body'><h5 class='card-title'>" + entry.title + "</h5> <p class='card-text'>" + entry.body + "</p>";
  // emptyCard.concat("<h5 class='card-title'>", entry.title, "</h5>");
  return emptyCard + "</div></div>";
}

$("form#form").submit(function(event) {
  event.preventDefault();
  const inputtedTitle = $("input#title").val();
  const inputtedBody = $("input#body").val();
  let newEntry = new Entry(inputtedTitle, inputtedBody);
  let finalTeaser = newEntry.getTeaser();
  newEntry.countVowels();
  $("#output-title").text(newEntry.title);
  $("#output-teaser").text(finalTeaser);
  $("#output-vowels").text(newEntry.vowels);
  $("#output-consonants").text(newEntry.consonants);
  $("#card-outputs").append(makeCard(newEntry));
});