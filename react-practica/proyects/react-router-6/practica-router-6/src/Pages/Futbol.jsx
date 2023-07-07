import { Link } from "react-router-dom";
function Futbol({ equipos }) {
    return (<>
        <ul>
            {equipos && equipos.map((equipo) => <li key={equipo.id}><Link to={`/equipos/${equipo.id}`}>{equipo.equipo}</Link></li>)}
        </ul>
    </>);
}

export default Futbol;