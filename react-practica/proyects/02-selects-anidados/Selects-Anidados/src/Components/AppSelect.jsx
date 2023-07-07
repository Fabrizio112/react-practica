import { useEffect, useState } from "react";
import SelectDepartamentos from "./SelectDepartamentos";
import SelectMunicipios from "./SelectMunicipios";
import SelectProvincias from "./SelectProvincias";

function AppSelect() {
    const [provincias, setProvincias] = useState([])
    const [provincia, setProvincia] = useState("")
    const [departamentos, setDepartamentos] = useState([])
    const [departamento, setDepartamento] = useState("")
    const [municipios, setMunicipios] = useState([])
    useEffect(() => {
        const url = "https://apis.datos.gob.ar/georef/api/provincias"
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setProvincias(...provincias, json.provincias)
            })
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        setDepartamentos([])
        setMunicipios([])
        const provinciaSeleccionada = provincia
        fetch(`https://apis.datos.gob.ar/georef/api/departamentos?provincia=${provinciaSeleccionada}&max=1000`)
            .then(res => res.json())
            .then(json => {
                setDepartamentos(json.departamentos)
            })
            .catch(error => console.log(error))
    }, [provincia])

    useEffect(() => {
        const departamentoSeleccionado = departamento
        fetch(`https://apis.datos.gob.ar/georef/api/localidades?departamento=${departamentoSeleccionado}&provincia=${provincia}&max=1000`)
            .then(res => res.json())
            .then(json => {
                setMunicipios(json.localidades)
            })
            .catch(error => console.log(error))
    }, [departamento])

    //https://apis.datos.gob.ar/georef/api/localidades?provincia=chubut
    return (
        <>
            <h1>Selects Anidados</h1>
            <h2>Argentina</h2>
            <SelectProvincias data={provincias} setProvincia={setProvincia} />
            <br />
            <SelectDepartamentos data={departamentos} setDepartamento={setDepartamento} />
            <br />
            <SelectMunicipios data={municipios} />
        </>
    );
}

export default AppSelect;