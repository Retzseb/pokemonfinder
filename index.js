// Házi feladat:
// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
// A fenti végpontot átalakítva képesek legyünk lekérni 0-9999-ig
// pokémonokat. Minden lekért pokemon képét jelenítsük meg!
// A megejelenítés egy 5x5-ös gridben végezd el!
// Használj css-t a grid kialakításához

const OPTIONS = {
  api: "https://pokeapi.co/api/v2/pokemon/",
  // api: "https://pokeapi.co/api/v2/pokemon?limit={limit}offset={start}",
};

const components = {
  button: "ok-button",
  limit: "limit-input",
  start: "start-input",
  container: "pokemon-container",
};

document
  .getElementById(components.button)
  .addEventListener("click", async () => {
    const count = document.getElementById(components.limit).value;
    const start = document.getElementById(components.start).value;
    const limit = parseInt(start) + parseInt(count);
    console.log(limit);

    document.getElementById(components.container).innerHTML = "";

    for (let i = start; i <= limit - 1; i++) {
      0;
      const data = await getPokemonById(i);
      createPokemonImage(data);
    }
  });

async function getPokemonById(id) {
  return (await fetch(`${OPTIONS.api}${id}`)).json();
}

function createPokemonImage(data) {
  const img = document.createElement("img");
  img.src = data.sprites.front_default;

  document.getElementById(components.container).appendChild(img);

  const p = document.createElement("p");
  p.innerText = data.species.name;
  document.getElementById(components.container).append(p);

  const div = document.createElement("div");
  div.append(img, p);
  document.getElementById(components.container).append(div);
}

// const OPTIONS = {
//   api: "https://pokeapi.co/api/v2/pokemon/",
//   api2: "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
// };

// const components = {
//   button: "search-button",
//   input: "search-input",
//   container: "pokemon-container",
// };

// document
//   .getElementById(components.button)
//   .addEventListener("click", async () => {
//     createPokemonImage(await getPokemonByName(
//         document.getElementById(components.input).value
//       ));
//   });

// async function getPokemonByName(pokemonName) {
//   return (await fetch(`${OPTIONS.api}${pokemonName}`)).json()
// }

// function createPokemonImage(data) {
//   document.getElementById(components.container).append(
//     Object.assign(document.createElement("img"), {
//       src: data.sprites.front_default,
//     })
//   );
// }
