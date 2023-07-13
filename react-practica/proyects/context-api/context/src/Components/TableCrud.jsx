import { useContext } from "react";
import TableCrudRow from "./TableCrudRow";
import DatabaseContext from "../context/DatabaseContext";

function TableCrud() {

    const { db } = useContext(DatabaseContext)
    return (
        <>
            <h2>Tabla de Datos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Equipo</th>
                        <th>Apodo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {db.length > 0 ? db.map((el) => <TableCrudRow key={el.id} data={el} />) : <tr><td colSpan={3}>No se encontraron resultados</td></tr>}
                </tbody>
            </table>
        </>
    );
}

export default TableCrud;