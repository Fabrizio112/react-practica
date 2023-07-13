import { useContext } from "react";
import DatabaseContext from "../context/DatabaseContext";

function TableCrudRow({ data }) {
    const { nombre, apodo, id } = data
    const { deleteData, setDataToEdit } = useContext(DatabaseContext)
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