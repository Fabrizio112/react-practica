function TableRow({ data, deleteData, setDataToEdit, dataToEdit }) {
    const { equipo, apodo, id } = data
    const handleDelete = (e) => {
        deleteData(id)
    }
    const handleEdit = (e) => {
        setDataToEdit({
            equipo: data.equipo,
            apodo: data.apodo,
            id: data.id
        })
    }
    return (
        <tr>
            <td>{equipo}</td>
            <td>{apodo}</td>
            <td>
                <button onClick={handleDelete}>Eliminar</button>
                <button onClick={handleEdit}>Editar</button>
            </td>
        </tr>
    );
}

export default TableRow;