const Header = (props) => {
    const logoImg = './img/svg/coffee-beans.svg';
 
    return (
        <>
                <div className="header__wrapper">
                    <div className="header__logo">
                            <img src={logoImg} alt="Logo Coffee house" className="header__logo_pic"/>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__list">
                            {props.renderMenu('white')}
                        </ul>
                    </nav>
                </div>
        </>
    

    )
}

export default Header;