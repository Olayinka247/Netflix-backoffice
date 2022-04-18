const endpoint = "https://striveschool-api.herokuapp.com/api/movies";

async function makeMovies() {
  const response = await fetch(endpoint, {
    headers: {
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

const addMovies = {
  name: "",
  description: "",
  category: "",
  imageUrl: "",
};

function createdMovies() {
  addMovies.name = document.getElementById("product-name").value;
  addMovies.description = document.getElementById("product-description").value;
  addMovies.category = document.getElementById("product-brand").value;
  addMovies.imageUrl = document.getElementById("product-imageUrl").value;
}
