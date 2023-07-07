import { useEffect, useRef, useState } from "react";

const initialForm = {
    equipo: "",
    apodo: "",
    id: null
}
function FormularioCrud({ createData, updateData, dataToEdit }) {
    const [form, setForm] = useState(initialForm)
    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit)
        }
    }, [dataToEdit])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!form.equipo || !form.apodo) {
            alert("Campos Incompletos")
            return
        }
        if (form.id === null) {
            createData(form)
        } else {
            updateData(form)
        }
        handleReset()
    }
    const handleReset = (e) => {
        setForm(initialForm)
    }
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Formulario de Crud Simulado</h1>
            <input name="equipo" id="equipo" placeholder="Ingresa el equipo" value={form.equipo} onChange={handleChange} />
            <br />
            <input name="apodo" id="apodo" placeholder="Ingresa el Apodo" value={form.apodo} onChange={handleChange} />
            <br />
            <button type="submit">Send</button>
            <button type="reset" onClick={handleReset}>Resetear</button>
        </form>
    );
}

export default FormularioCrud;