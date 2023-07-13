import { useEffect, useReducer, useState } from "react";
import FormularioCrud from "./FormularioCrud";
import TableCrud from "./TableCrud";
import { TYPES } from "../actions/CrudActions";
import crudReducer, { crudInitialState } from "../reducers/crudReducer";


function CrudApi() {
    const [state, dispatch] = useReducer(crudReducer, crudInitialState)
    const { db } = state
    const [dataToEdit, setDataToEdit] = useState("")
    const url = "http://localhost:3000/equipos"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                dispatch({ type: TYPES.READ_ALL_DATA, payload: json })
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                let datosEquipos = json
                dispatch({ type: TYPES.READ_ALL_DATA, payload: datosEquipos })
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
                dispatch({ type: TYPES.CREATE_DATA, payload: json })
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
                console.log(json)
                dispatch({ type: TYPES.UPDATE_DATA, payload: json })
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
                dispatch({ type: TYPES.DELETE_DATA, payload: id })
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