import { useParams, useNavigate } from "react-router-dom";
function FutbolDetalle({ equipos }) {
    function ObtenerEquipo(id) {
        return equipos.find((equipo) => equipo.id.toString() === id)
    }
    const { id } = useParams()
    let equipo = ObtenerEquipo(id)
    let navegador = useNavigate()
    let handleBack = () => { navegador(-1) }
    return (<>

        <h1>Detalle del Equipo</h1>
        <h2>{equipo.equipo}</h2>
        <h3>{equipo.apodo}</h3>
        <h4>{equipo.id}</h4>
        <button onClick={handleBack}>Volver Atras</button>
    </>);
}

export default FutbolDetalle;