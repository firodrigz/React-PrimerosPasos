import "./CampoTexto.css";

const CampoTexto = (props) => {

    const manejarCambio = (e) => {
        console.log("Cambio", e);
        props.actualizarValor(e.target.value);
    }
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={props.placeholder} required={props.required} value={props.valor} onChange={manejarCambio}></input>
    </div>
}

export default CampoTexto;