const Section1 = (props) => {
    const {pageNow} = props;
    const logoImg = './img/svg/Beans_logo_black.svg';
    let title = '';
    let textBody = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. 
                    As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.`;
    let mainImg = '';
    let photoBlock = null;
    let classStyle = "wrapper_main";
    let classOffset = null;
     
    switch (pageNow) {
        case 1:
            title = 'About Us';
            textBody += ` Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.`;
            classStyle = null;
            classOffset = {marginTop: '50px'};
            break;
        case 2:
            title = 'About our beans';
            mainImg = './img/girl.jpg';
            photoBlock = <div className="section_photo">
                            <img src={mainImg} alt="Coffee" className="section_girl"/>
                        </div>
            break;
        case 3:
            title = 'About our goods';
            mainImg = './img/coffee-cap.jpg';
            photoBlock = <div className="section_photo">
                            <img src={mainImg} alt="Coffee" className="section_girl"/>
                        </div>
            break;
        default:
            title = 'About it';
            mainImg = './img/sort-aromistico.jpg';
            photoBlock = <div className="section_photo">
                            <img src={mainImg} alt="Coffee" className="section_girl"/>
                        </div>    
            textBody = `Country: Brasil
                            Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Price:  16.99$`;
    }
    
    return (
        <>
        <div className={classStyle} style={classOffset}>
            {photoBlock}
            <div className="wrapper__section">
                <div className="title_section">
                    {title}
                </div>
                <div className="logo_section">
                    <img src={logoImg} alt="Logo Coffee Bean Black" className="bean__logo_pic2"/>
                </div>
                <div className="body_section">
                    {textBody}
                </div>
            </div>
        </div>
    </>

    )
}


export default Section1;