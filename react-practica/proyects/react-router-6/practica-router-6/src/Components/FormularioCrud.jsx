import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialForm = {
    nombre: "",
    apodo: "",
    id: null

}
function FormularioCrud({ createData, upgradeData, dataToEdit, setDataToEdit }) {
    const [form, setForm] = useState(initialForm)
    const navigate = useNavigate()
    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit)
        } else {
            setForm(initialForm)
        }
    }, [dataToEdit])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!form.nombre || !form.apodo) {
            alert("Datos incompletos")
            return
        }
        if (form.id === null) {
            createData(form)
        } else {
            upgradeData(form)
        }
        handleReset()
    }
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleReset = (e) => {
        setForm(initialForm)
        setDataToEdit("")
        navigate("/")
    }
    return (
        <>
            <h1>Formulario Crud Api Real</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="nombre" name="nombre" placeholder="Ingrese el equipo" value={form.nombre} onChange={handleChange} />
                <input type="text" id="apodo" name="apodo" placeholder="Ingrese el Apodo" value={form.apodo} onChange={handleChange} />
                <button type="submit">Send</button>
                <button type="reset" onClick={handleReset}>Reset</button>
            </form>
        </>
    );
}

export default FormularioCrud;