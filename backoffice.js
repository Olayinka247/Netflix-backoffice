const endpoint = "https://striveschool-api.herokuapp.com/api/movies";

const addMovies = {
  name: "",
  description: "",
  category: "",
  imageUrl: "",
};

function createdMovies() {
  addMovies.name = document.getElementById("movie-name").value;
  addMovies.description = document.getElementById("movie-description").value;
  addMovies.category = document.getElementById("movie-category").value;
  addMovies.imageUrl = document.getElementById("movie-imageUrl").value;
}

function submitMovies(event) {
  event.preventDefault();
  createdMovies();
  makeMovies();
}

async function makeMovies() {
  const response = await fetch(endpoint, {
    headers: {
      "content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjI0MzRlYTdiMTAwMTVkMDY3YWYiLCJpYXQiOjE2NTAyOTY3MTcsImV4cCI6MTY1MTUwNjMxN30.K9txPJF10Wv5lMPjkpXlSdmlT8Y_1aUlPBZl-XQGxZw",
    },
    method: "POST",
    body: JSON.stringify(addMovies),
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
  }
}
makeMovies();
