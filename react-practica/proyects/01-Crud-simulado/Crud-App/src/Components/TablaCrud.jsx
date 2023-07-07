import TableRow from "./TableRow";

function TablaCrud({ data, deleteData, setDataToEdit, dataToEdit }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Equipo</th>
                    <th>Apodo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ? data.map(el => <TableRow key={el.id} data={el} deleteData={deleteData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />) : <tr><td colSpan={3}>No se encontraron resultados</td></tr>}
            </tbody>
        </table>
    );
}

export default TablaCrud;