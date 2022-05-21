const randomNumber = Math.ceil(Math.random()* 150);

console.log(randomNumber);

document.addEventListener('DOMContentLoaded', () => {
  fetchData(randomNumber)

})

const fetchData = async(id) => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    const data = await res.json()
    pintarCard(data)
  } catch (error) {
    console.log(error);
  }
}


const pintarCard = (pokemon) => {
  
  console.log(pokemon);

  const flex = document.querySelector(".flex")
  const template = document.querySelector("#template-card").content
  const clone = template.cloneNode(true)
  const fragment = document.createDocumentFragment()

  clone.querySelector(".card-body-img").setAttribute("src", pokemon.sprites.other.dream_world.front_default)

  fragment.appendChild(clone)
  flex.appendChild(fragment)
}