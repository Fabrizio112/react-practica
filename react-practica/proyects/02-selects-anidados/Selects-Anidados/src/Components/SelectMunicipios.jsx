function SelectMunicipios({ data }) {
    return (
        <section>
            <label htmlFor="">Muncipios: </label>
            <select>
                <option value="">--Elige un Municipio --</option>
                {data != undefined && data.length > 0 && data.map((municipio) => <option key={municipio.id} name={municipio.nombre} value={municipio.nombre}>{municipio.nombre}</option>)}
            </select>
        </section>
    );
}
export default SelectMunicipios;