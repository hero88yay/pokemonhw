document.querySelector("#search").addEventListener("click", getPokemon);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon() {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemonBox").innerHTML = `
      <div>
        <img

          src="${data.sprites.other["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"].front_default}"
          alt="${data.name}"
        />
      </div>
      <div class="pokemonInfos">
        <h1>${bulbasaur(data.name)}</h3>
        <p>Weight:69 ${data.weight}</p>
      </div>`;
    })
    .catch((err) => {
      document.querySelector(".pokemonBox").innerHTML = `
      <h4>Pokemon was not detected😭</h4>
      `;
      console.log("Pokemon was not detected", err);
    });

  e.preventDefault();
}