import { useState } from "react";
import FormularioCrud from "./FormularioCrud";
import TablaCrud from "./TablaCrud";

const equiposDB = [
    {
        id: 1,
        equipo: "Instituto",
        apodo: "La gloria"
    },
    {
        id: 2,
        equipo: "River",
        apodo: "Los Millonarios"
    },
    {
        id: 3,
        equipo: "San Lorenzo",
        apodo: "Los Cuervos"
    },
    {
        id: 4,
        equipo: "Estudiantes",
        apodo: "El Pincha"
    },
    {
        id: 5,
        equipo: "Huracan",
        apodo: "El Quemero"
    }
]
export default function CrudApp() {
    const [db, setDb] = useState(equiposDB)
    const [dataToEdit, setDataToEdit] = useState()
    const deleteData = (id) => {
        setDb(db.filter(el => el.id != id))
    }
    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el)
        setDb(newData)
    }
    const createData = (data) => {
        data.id = Date.now()
        setDb([...db, data]);
    }
    return (
        <>
            <FormularioCrud createData={createData} updateData={updateData} dataToEdit={dataToEdit} />
            <TablaCrud data={db} deleteData={deleteData} setDataToEdit={setDataToEdit} dataToEdit={dataToEdit} />
        </>
    );
}