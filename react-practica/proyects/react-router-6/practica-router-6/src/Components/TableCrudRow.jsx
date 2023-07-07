import { useNavigate } from "react-router-dom";

function TableCrudRow({ data, deleteData, setDataToEdit }) {
    const { nombre, apodo, id } = data
    const navigate = useNavigate()
    const handleEdit = () => {
        setDataToEdit(data)
        navigate(`/editar/${id}`)
    }
    return (
        <tr>
            <td>{nombre}</td>
            <td>{apodo}</td>
            <td>
                <button onClick={() => deleteData(id)}>Delete</button>
                <button onClick={handleEdit}>Edit</button>
            </td>
        </tr>
    );
}

export default TableCrudRow;