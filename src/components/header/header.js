const Header = (props) => {
   
    const logoImg = './img/svg/coffee-beans.svg';
// <a href="/" className="header__link" data-id='1'>Coffee house</a>
// <a href="/" className="header__link"  data-id='2'>Our coffee</a>
// <a href="/" className="header__link" data-id='3'>For your pleasure</a>
//<a href="/" className="header__logo_link">
    return (
        <>
                <div className="header__wrapper">
                    <div className="header__logo">
                            <img src={logoImg} alt="Logo Coffee house" className="header__logo_pic"/>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__item">
                                <button type="button" className="header__link" onClick={() => props.onUpdatePage('1')}>Coffee house</button>
                            </li>
                            <li className="header__item">
                                <button type="button" className="header__link" onClick={() => props.onUpdatePage('2')}>Our coffee</button>
                            </li>
                            <li className="header__item">
                                 <button type="button" className="header__link" onClick={() => props.onUpdatePage('3')}>For your pleasure</button>
                            </li>
                        </ul>
                    </nav>
                </div>
        </>
    

    )
}

export default Header;