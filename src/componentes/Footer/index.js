import "./Footer.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://github.com/firodrigz">
                <AiFillGithub className="icon"/>
            </a>
            <a href="https://www.linkedin.com/in/rodriguez-facundo-ivan/">
                <AiFillLinkedin className="icon"/>
            </a>            
        </div>
        <img src="/img/Logo.png" alt="org" />
        <strong>Desarrollado por Rodríguez Facundo</strong> 
    </footer>
}

export default Footer;