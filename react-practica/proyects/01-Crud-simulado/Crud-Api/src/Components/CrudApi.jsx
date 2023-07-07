import { useEffect, useState } from "react";
import FormularioCrud from "./FormularioCrud";
import TableCrud from "./TableCrud";


function CrudApi() {
    const [db, setDb] = useState([])
    const [dataToEdit, setDataToEdit] = useState("")
    const url = "http://localhost:3000/equipos"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                let datosEquipos = json
                setDb(...db, datosEquipos)
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                let datosEquipos = json
                setDb(datosEquipos)
            })
            .catch(err => console.log(err))
    }, [db])

    const createData = (data) => {
        let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(data)
        }
        fetch(url, options)
            .then(res => res.json())
            .then(json => {
            })
            .catch(err => console.log(err))
    }
    const upgradeData = (data) => {
        let options = {
            method: "PUT",
            headers: {
                "Content-type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(data)
        }
        fetch(`${url}/${data.id}`, options)
            .then(res => res.json())
            .then(json => {
            })
            .catch(err => console.log(err))
    }
    const deleteData = (id) => {
        let options = {
            method: "DELETE",
            headers: {
                "Content-type": "application/json;charset=utf-8"
            }
        }
        fetch(`${url}/${id}`, options)
            .then(res => res.json())
            .then(json => {
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <FormularioCrud createData={createData} upgradeData={upgradeData} dataToEdit={dataToEdit} />
            <TableCrud data={db} deleteData={deleteData} setDataToEdit={setDataToEdit} />
        </>
    );
}

export default CrudApi;