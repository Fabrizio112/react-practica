function SelectDepartamentos({ data, setDepartamento }) {
    const handleSelect = (e) => {
        setDepartamento(e.target.value)
    }
    return (
        <section onChange={handleSelect}>
            <label htmlFor="">Departamentos: </label>
            <select>
                <option value="">--Elige un Departamento --</option>
                {data != undefined && data.length > 0 && data.map((departamento) => <option key={departamento.id} name={departamento.nombre} value={departamento.nombre}>{departamento.nombre}</option>)}
            </select>
        </section>
    );
}

export default SelectDepartamentos;