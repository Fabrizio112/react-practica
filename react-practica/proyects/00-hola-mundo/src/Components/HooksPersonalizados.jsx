import { useFetch } from "../hooks/useFetch"


export default function HooksPersonalizados() {
    let url = "https://pokeapi.co/api/v2/pokemon"
    let { data, isPending, error } = useFetch(url)
    return (
        <>
            <h2>Hooks Personalizados</h2>
            <mark style={{ backgroundColor: "blue", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>{JSON.stringify(data)}</mark>
            <br />
            <mark>{JSON.stringify(isPending)}</mark>
            <br />
            <mark style={{ width: "100%" }}>{JSON.stringify(error)}</mark>
        </>
    )
}