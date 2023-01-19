const Footer = (props) => {
    
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
                                    <button type="button" className="footer__link" onClick={() => props.onUpdatePage('1')}>Coffee house</button>
                                </li>
                                <li className="footer__item">
                                    <button type="button" className="footer__link" onClick={() => props.onUpdatePage('2')}>Our coffee</button>
                                </li>
                                <li className="footer__item">
                                     <button type="button" className="footer__link" onClick={() => props.onUpdatePage('3')}>For your pleasure</button>
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