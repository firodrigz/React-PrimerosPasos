import "./ListaOpciones.css";

const ListaOpciones = (props) => {

    //Método map -> arreglo.map( (equipo, index) => {
    //        return <option></option>  Toma un arreglo y regresa un nuevo arreglo
    //  })
    

const manejarCambio = (e) => {
    props.actualizarEquipo(e.target.value);
}

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio} >
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {/* props.equipos.map((equipo, i) => {
                return <option key={i} value={equipo}>{equipo}</option>
            })*/}
        </select>
    </div>
}

export default ListaOpciones