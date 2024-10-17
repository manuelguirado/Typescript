//calling the api using a promises try catch and settimeout
function callapi(url: string) {
  try {
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }, 1000);
  } catch (error) {
    console.error(error);
  }
}

callapi("https://pokeapi.co/api/v2/pokemon");