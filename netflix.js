window.onload = () => {
  listMovies();
};

const endpoint = "https://striveschool-api.herokuapp.com/api/movies";

async function listMovies() {
  const response = await fetch(endpoint, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjI0MzRlYTdiMTAwMTVkMDY3YWYiLCJpYXQiOjE2NTAyODg4MjIsImV4cCI6MTY1MTQ5ODQyMn0.8MkgzAYXObEj1vXBzkg91cY4F43tjLbylXXlp4FEVkU",
    },
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
  }
}
listMovies();
