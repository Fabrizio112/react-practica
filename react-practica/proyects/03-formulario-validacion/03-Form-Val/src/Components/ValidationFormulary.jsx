import { useEffect, useState } from "react";
import styles from "./styles.css"

const initialForm = {}
const initialError = {
    nombre: "",
    email: "",
    asunto: "",
    comments: ""
}

function ValidationFormulary() {
    const [form, setForm] = useState(initialForm)
    const [error, setError] = useState(initialError)
    const [messageForm, setMessageForm] = useState("")
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleErrors = (e) => {
        let regExpNombre = new RegExp(/^[a-zA-Z ]+$/)
        let regExpEmail = new RegExp(/^[a-z0-9.-]{1,30}@([a-z]{1,20}\.)[a-z]{2,3}$/)
        let regExpAsunto = new RegExp(/^[a-zA-Z0-9 ]+$/)
        let regExpComments = new RegExp(/^[a-zA-Z0-9 ,.-]{1,255}$/)
        if (e.target) {
            console.log(e.target.value)
            if (e.target.value != "") {
                switch (e.target.name) {
                    case "nombre":
                        if (regExpNombre.test(e.target.value) === false) {
                            setError({
                                ...error,
                                [e.target.name]: true
                            })
                        } else {
                            setError({
                                ...error,
                                [e.target.name]: ""
                            })
                        }

                        break;
                    case "email":

                        if (regExpEmail.test(e.target.value) === false) {
                            setError({
                                ...error,
                                [e.target.name]: true
                            })
                        } else {
                            setError({
                                ...error,
                                [e.target.name]: ""
                            })

                        }
                        break;
                    case "asunto":

                        if (regExpAsunto.test(e.target.value) === false) {
                            setError({
                                ...error,
                                [e.target.name]: true
                            })
                        } else {
                            setError({
                                ...error,
                                [e.target.name]: ""
                            })
                        }

                        break;
                    case "comments":

                        if (regExpComments.test(e.target.value) === false) {
                            setError({
                                ...error,
                                [e.target.name]: true
                            })
                        } else {
                            setError({
                                ...error,
                                [e.target.name]: ""
                            })
                        }

                        break;
                }
            } else {
                setError({
                    ...error,
                    [e.target.name]: ""
                })
            }
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(error)
        if (error.nombre != "" || error.comments != "" || error.asunto != "" || error.email != "") {
            alert("No se puede enviar,arregla los errores")
            return
        } else {
            fetch("https://formsubmit.co/ajax/fabri.avila3@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: form
            })
                .then(response => response.json())
                .then(data => {
                    setMessageForm(data.message)
                    setForm(initialForm)
                    setTimeout(() => {
                        setMessageForm("")
                    }, 3000);
                })
                .catch(error => console.log(error));
        }
    }
    return (
        <section style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", width: "80%", height: "100vh", textAlign: "center" }}>
            <h2 style={{ fontSize: "3rem" }}>Envianos tus comentarios</h2>
            <form action="" onSubmit={handleSubmit} style={{ width: "100%", height: "80%", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                <input type="text" name="nombre" placeholder="Ingrese su nombre" id="nombre" value={form.nombre} onKeyUp={handleErrors} onChange={handleChange} required />
                {error.nombre === true && <p className="error">Este campo solo admite letras</p>}
                <br />
                <input type="email" name="email" placeholder="Ingrese su email" id="email" value={form.email} onKeyUp={handleErrors} onChange={handleChange} required />
                {error.email === true && <p className="error">Ingrese un email valido</p>}
                <br />
                <input type="text" name="asunto" placeholder="Ingrese su asunto" id="asunto" value={form.asunto} onKeyUp={handleErrors} onChange={handleChange} required />
                {error.asunto === true && <p className="error">Ingrese un Asunto Valido</p>}
                <br />
                <textarea name="comments" placeholder="Ingrese sus comentarios" id="comments" cols="30" rows="10" value={form.comments} onKeyUp={handleErrors} onChange={handleChange} required></textarea>
                {error.comments === true && <p className="error">El comentario no puede tener mas de 255 caracteres</p>}
                <br />

                <button type="submit">Enviar</button>

                {messageForm && <p className="succesfull"> {messageForm}</p>}
            </form>
        </section>
    );
}

export default ValidationFormulary;