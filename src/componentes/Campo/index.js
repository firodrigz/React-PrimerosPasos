import "./Campo.css";

const Campo = (props) => {

    const { type= "text" } = props

    const manejarCambio = (e) => {
        console.log("Cambio", e);
        props.actualizarValor(e.target.value);
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input type={type} placeholder={props.placeholder} required={props.required} value={props.valor} onChange={manejarCambio}></input>
    </div>
}

export default Campo;