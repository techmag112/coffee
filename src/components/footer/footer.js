const Footer = (props) => {
    const logoImg = './img/svg/coffee-beans_black.svg';
 
    return (
        <>
                <div className="footer_main">
                    <div className="footer_bottom"> 
                        <nav className="footer__nav">
                            <ul className="footer__list">
                                <li className="footer__logo">
                                    <img src={logoImg} alt="Logo Coffee house" className="footer__logo_pic"/>    
                                </li>
                                    {props.renderMenu()}
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