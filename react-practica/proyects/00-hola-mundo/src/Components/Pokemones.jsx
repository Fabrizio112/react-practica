import { useEffect } from "react";
import { useState } from "react";

function CrearPokemon({ name, image }) {
    return (
        <>
            <figure>
                <img src={image} alt={name} />
                <figcaption>{name}</figcaption>
            </figure>
        </>
    )
}

export default function Pokemones() {
    const [pokemones, setPokemones] = useState([])
    useEffect(() => {
        async function obtenerPokemones(url) {
            let res = await fetch(url)
            let data = await res.json()
            data.results.forEach(async (el) => {
                let res = await fetch(el.url)
                let dataPokemon = await res.json()
                let pokemon = {
                    id: dataPokemon.id,
                    nombre: dataPokemon.name,
                    imagen: dataPokemon.sprites.front_default
                }
                setPokemones((pokemones) => [...pokemones, pokemon])
            })
        }
        const url = "https://pokeapi.co/api/v2/pokemon"
        obtenerPokemones(url)
    }, [])
    return (
        <>
            <h1>Fetch a la pokeApi con Async Await</h1>
            {pokemones.length > 0 ?
                pokemones.map((el) => <CrearPokemon key={el.id} name={el.nombre} image={el.imagen} />)
                : <h3>Cargando...</h3>}
        </>
    )

}