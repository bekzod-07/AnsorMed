import "./Header.css"
import Logo from "./logo.svg";

function Header(){
    return(
        <header className='header'>
            <div className='container'>
                <div className="header__text">
                    <div className="header__text__logo">
                        <img src={Logo} alt="rasm"/>
                        <h2>AnsorMed</h2>
                    </div>
                    <div className="header__text__list">
                        <ul>
                            <li>Xizmatlar</li>
                            <li>Dorilar</li>
                            <li>Asal</li>
                            <li>Kontaktlar</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="header__text__button">
                        <button className='button'>Qabulga yozilish</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header