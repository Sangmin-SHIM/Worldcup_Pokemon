import { useEffect, useState } from "react";
import PokemonThumbnail from "./components/PokemonThumbnail";

function App() {

  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=30');

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)
    console.log("data : ",data)

    function createPokemonObject (results){
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons( currentList => [... currentList, data])

      })

    }
    createPokemonObject(data.results)
     console.log(allPokemons);

  }

  useEffect(()=>{
    getAllPokemons()
  },[])

  const image = require("./img/Pokeball/Feu.png");

  return (
    <div className="app-container">
      <div className="element">
        <div class="pokeball_box">
          <img src={image} class="pokeball ball1"/>
  
        </div>
        <h1>Pokemon Evolution</h1>
      </div>
      <div className="pokemon-container">
          <div className="all-containers">
            { allPokemons.map((pokemon, index) => 
                <PokemonThumbnail
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.sprites.front_default}
                  type={pokemon.types[0].type.name}
                  key={index}
                ></PokemonThumbnail>
            )}
          </div>
          <button className="load-more">Load more</button>
      </div>
    </div>



  );
}

export default App;
