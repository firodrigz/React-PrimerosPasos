import "./Footer.css";

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://github.com/firodrigz">
                <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/rodriguez-facundo-ivan/">
                <i class="fa-brands fa-linkedin"></i>
            </a>            
        </div>
        <img src="/img/Logo.png" alt="org" />
        <strong>Desarrollado por Rodríguez Facundo</strong> 
    </footer>
}

export default Footer;