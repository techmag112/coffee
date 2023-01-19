const HeaderExt = (props) => {
   
    const logoImg = './img/svg/Beans_logo.svg';

    return (
        <>
            <div className="header__wrapper_add">
                    <div className="header__add_about_coffee">
                        Everything You Love About Coffee
                    </div>
                    <div className="header__add_logo">
                        <img src={logoImg} alt="Logo Coffee Bean" className="bean__logo_pic"/>
                    </div>
                    <div className="header__add_tagline">
                        <div className="header__add_tagline_row">
                            We makes every day full of energy and taste
                        </div>
                        <div className="header__add_tagline_row">
                            Want to try our beans?
                        </div>
                    </div>
                    <div className="button_more">
                        <button className="more" onClick={() => props.onUpdatePage('2')} >More</button>
                    </div>
            </div>

        </>
    

    )
}

export default HeaderExt;