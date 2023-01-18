const Footer = () => {
    
    return (
        <>
                <div className="footer_main">
                    <div className="footer_bottom"> 
                        <nav className="footer__nav">
                            <ul className="footer__list">
                                <li className="footer__logo">
                                    <img src="./img/svg/coffee-beans_black.svg" alt="Logo Coffee house" className="footer__logo_pic"/>    
                                </li>
                                <li className="footer__item">
                                    <a href="/" className="footer__link">Coffee house</a>
                                </li>
                                <li className="footer__item">
                                    <a href="/" className="footer__link">Our coffee</a>
                                </li>
                                <li className="footer__item">
                                    <a href="/" className="footer__link">For your pleasure</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="footer_logo_bottom">
                            <img src="./img/svg/Beans_logo_bottom.svg" alt="Logo Coffee house Bottom" className="footer__logo_pic2"/>
                        </div>
                    </div>
                </div>

       </>
    )
}


export default Footer;