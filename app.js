console.log("Test")

let age = prompt("What's your age?")
let movieRating = prompt("What's the movie rating?");

if (age >= 18) {
  alert("You can watch any movie!");
} else if (age >= 15) {
  if (movieRating === "U" || movieRating === "PG" || movieRating === "12" || movieRating === "15") {
    alert("You can watch the movie!");
  } else {
    alert("Sorry, this movie is not suitable for your age group.");
  }
} else if (age >= 12) {
  if (movieRating === "U" || movieRating === "PG" || movieRating === "12") {
    alert("You can watch the movie!");
  } else {
    alert("Sorry, this movie is not suitable for your age group.");
  }
} else if (age >= 6) {
  if (movieRating === "U" || movieRating === "PG") {
    alert("You can watch the movie!");
  } else {
    alert("Sorry, this movie is not suitable for your age group.");
  }
} else {
  alert("You are too young to watch any movie.");
}
