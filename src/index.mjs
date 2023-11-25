import "./styles.css";

const app = document.getElementById("app");
const imgURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 500; i++) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");

  const imgPoke = document.createElement("img");
  imgPoke.src = `${imgURL}${i}.png`;

  const indexPoke = document.createElement("span");
  indexPoke.innerText = `#${i}`;

  pokemon.appendChild(imgPoke);
  pokemon.appendChild(indexPoke);
  app.appendChild(pokemon);
}
