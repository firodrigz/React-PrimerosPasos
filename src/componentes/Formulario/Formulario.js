import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const manejarEnvio = (evento) => {
        console.log("Manejar el envio", evento);
        evento.preventDefault();
        let datosAEnviar= {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo
        }
        console.log(datosAEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingrese nombre" required={true} valor={nombre} actualizarValor={actualizarNombre}/>
            <CampoTexto titulo="Puesto" placeholder="Ingrese puesto" required valor={puesto} actualizarValor={actualizarPuesto}/>
            <CampoTexto titulo="Foto" placeholder="Ingrese enlace de foto" valor={foto} actualizarValor={actualizarFoto}/>
            <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos} />
            <Boton texto="Crear colaborador"/>
        </form>
    </section>
}

export default Formulario;