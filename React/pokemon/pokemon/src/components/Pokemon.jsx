import React, { useState } from "react";
import axios from 'axios';

const Pokemon = () =>{
    let [pokemonList, setPokemonList] = useState([]);

    const getPokemon = () => {
        console.log("gotta catch em all!");

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")

        .then(response => {
            console.log(response);
            setPokemonList(response.data.results);
            console.log(response.data.results);
        })
        .catch(err => {
            console.log(err)
        })

    }

    return(
        <>
        <div>
            <button onClick={ getPokemon }>Click to see them all!</button>
            {
                pokemonList.map((pokemon, idx) => {
                    return(
                        <div key={ idx }>
                            <h3>{ pokemon.name }</h3>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}


export default Pokemon;