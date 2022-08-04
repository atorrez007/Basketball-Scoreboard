let scoreHome = 0;
let scoreAway = 0;

let homeEl = document.querySelector(".home-points-text");
let awayEl = document.querySelector(".away-points-text");

// Scoring functions

function addPointsHome(num) {
  scoreHome += num;
  homeEl.textContent = scoreHome;
}

function addPointsAway(num) {
  scoreAway += num;
  awayEl.textContent = scoreAway;
}
