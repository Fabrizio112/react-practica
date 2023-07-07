function SelectProvincias({ data, setProvincia }) {
    const handleSelect = (e) => {
        setProvincia(e.target.value)
    }
    return (
        <section>
            <label htmlFor="">Provincias:  </label>
            <select onChange={handleSelect}>
                <option value="">--Elige una Provincia --</option>
                {data.length > 0 && data.map((provincia) => <option key={provincia.id} name={provincia.nombre} value={provincia.nombre}>{provincia.nombre}</option>)}
            </select>
        </section>
    );
}

export default SelectProvincias;