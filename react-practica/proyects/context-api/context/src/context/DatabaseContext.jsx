import { createContext, useEffect, useState } from "react";

const DatabaseContext = createContext()

const url = "http://localhost:3000/equipos"
const DatabaseProvider = ({ children }) => {
    const [db, setDb] = useState([])
    const [dataToEdit, setDataToEdit] = useState("")
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

    const data = { createData, upgradeData, dataToEdit, db, deleteData, setDataToEdit }
    return (
        <DatabaseContext.Provider value={data}>{children}</DatabaseContext.Provider>
    )
}
export { DatabaseProvider }
export default DatabaseContext