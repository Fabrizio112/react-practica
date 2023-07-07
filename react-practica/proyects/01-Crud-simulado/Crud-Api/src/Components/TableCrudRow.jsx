function TableCrudRow({ data, deleteData, setDataToEdit }) {
    const { nombre, apodo, id } = data
    return (
        <tr>
            <td>{nombre}</td>
            <td>{apodo}</td>
            <td>
                <button onClick={() => deleteData(id)}>Delete</button>
                <button onClick={() => setDataToEdit(data)}>Edit</button>
            </td>
        </tr>
    );
}

export default TableCrudRow;