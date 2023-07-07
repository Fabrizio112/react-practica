import { useEffect, useState } from "react";
import FormularioCrud from "./FormularioCrud";
import TableCrud from "./TableCrud";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";


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
            <HashRouter basename="equipos" >
                <header>
                    <h1>CRUD Api con React-Router Rutas</h1>
                    <nav>
                        <NavLink to="/">Equipos</NavLink>
                        <br />
                        <NavLink to="/agregar">Agregar</NavLink>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<TableCrud data={db} deleteData={deleteData} setDataToEdit={setDataToEdit} />} />
                    <Route path="/agregar" element={<FormularioCrud createData={createData} upgradeData={upgradeData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />} />
                    <Route path="/editar/:id" element={<FormularioCrud createData={createData} upgradeData={upgradeData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />} />
                    <Route path="*" element={<h2>Error 404 Not Found</h2>} />
                </Routes>
            </HashRouter>


        </>
    );
}

export default CrudApi;