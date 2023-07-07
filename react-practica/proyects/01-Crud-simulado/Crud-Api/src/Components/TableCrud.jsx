import TableCrudRow from "./TableCrudRow";

function TableCrud({ data, deleteData, setDataToEdit }) {

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
                    {data.length > 0 ? data.map((el) => <TableCrudRow key={el.id} data={el} deleteData={deleteData} setDataToEdit={setDataToEdit} />) : <tr><td colSpan={3}>No se encontraron resultados</td></tr>}
                </tbody>
            </table>
        </>
    );
}

export default TableCrud;