import "./Equipo.css";
import Colaborador from "../Colaborador";

const Equipo = (props) => {

    //Destructuración

    const { colorPrimario, colorSecundario, titulo } = props.datos  // const colorPrimario = props.datos.colorPrimario
    const { colaboradores }= props
    return <section className="equipo" style={{ backgroundColor: colorSecundario}}>
        <h3 style={{ borderColor: colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">
        {
            colaboradores.map( (colaborador, index) => <Colaborador datos={colaborador} key={index}/>)
        }
        </div>
    </section>
}

export default Equipo;