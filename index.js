const OPTIONS = {
  api: "https://pokeapi.co/api/v2/pokemon/"
}

const components = {
  button: 'search-button',
  input: 'search-input',
  container: 'pokemon-container'
}

function emptyPokemonContainer() {
    document.getElementById(components.container).innerHTML = "";
}

document.getElementById(components.button).addEventListener("click", async () => {
    emptyPokemonContainer();
    createPokemonImage(await getPokemonByName(document.getElementById(components.input).value));
})

document.getElementById(components.input).addEventListener("input", () => {
    if (input.value === 0) {
        document.getElementById(components.button).id = 'disabled';
    }
})

async function getPokemonByName(pokemonName) {
  const response = await fetch(`${OPTIONS.api}${pokemonName}`)
  const data = await response.json()
  return data;
}

//tedd fel gitre
//Refactor, rövidíts le bármit, amit tudsz
//Oldjuk meg, ha nincs semmi beütve az input mezőbe, legyen letiltva a gomb
//Minden megjelenítés előtt, töröljük ki az aktuális pokemont

function createPokemonImage(data) {
    document.getElementById(components.container).append(
        Object.assign(document.createElement('img'), {
        src: data.sprites.front_default,
    })
);
}
