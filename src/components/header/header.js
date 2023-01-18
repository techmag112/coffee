const Header = () => {
   
    const logoImg = './img/svg/coffee-beans.svg';

    return (
        <>
                <div className="header__wrapper">
                    <div className="header__logo">
                        <a href="/" className="header__logo_link">
                            <img src={logoImg} alt="Logo Coffee house" className="header__logo_pic"/>
                        </a>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__item">
                                <a href="/" className="header__link1">Coffee house</a>
                            </li>
                            <li className="header__item">
                                <a href="/" className="header__link2">Our coffee</a>
                            </li>
                            <li className="header__item">
                                <a href="/" className="header__link3">For your pleasure</a>
                            </li>
                        </ul>
                    </nav>
                </div>
        </>
    

    )
}

export default Header;