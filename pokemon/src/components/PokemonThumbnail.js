import React from "react";

const PokemonThumbnail = ({id, name, type}) => {
    return(
        <div className="thumb-container">
            <div className="number">
                <small>#0{id}</small>
            </div>
            {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/${id}.png`} alt={name} /> */}
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${id}.png`} alt={name} />
            {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/${id}.png`} alt={name} />
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/${id}.png`} alt={name} />
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={name} />
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${id}.png`} alt={name} />
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${id}.png`} alt={name} /> */}
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type : {type}</small>
            </div>
        </div>
    )
}


export default PokemonThumbnail