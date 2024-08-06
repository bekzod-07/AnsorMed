import "./Footer.css"
import Logo from "../Header/logo.svg";

function Footer(){
    return(
        <footer className="footer">
            <div className='container'>
                <div className="footer__text">
                    <div className="footer__text__logo">
                        <img src={Logo} alt="rasm"/>
                        <h2>AnsorMed</h2>
                    </div>
                    <div className="footer__text__list">
                        <ul>
                            <li>Xizmatlar</li>
                            <li>Dorilar</li>
                            <li>Asal</li>
                            <li>Kontaktlar</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer