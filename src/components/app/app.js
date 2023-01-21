import { useState, useEffect } from 'react';

import Header from '../header/header';
import HeaderExt from '../header-ext/headerExt';
import Section1 from '../section1/section1';
import Section2 from '../section2/section2';
import Footer from '../footer/footer';
import FilterPanel from '../filter-panel/filterPanel';
import DBService from '../services/DBService';

import './style.css'; 

const App = () => {
    const [pageNow, setPageNow] = useState(1);
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('');
    const [dbtop, setDBtop] = useState([]);
    const [dbcoffee, setDBcoffee] = useState([]);
    const [currentCountry, setCurrentCountry] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');

    // Загружаем базы из внешнего источника при первом формировании DOM
    useEffect(() => {
        const dbservice = new DBService()
        setDBtop(dbservice.getBestKind());
        setDBcoffee(dbservice.getDBCofee());
    }, []);
    
    // Добавление на базу кофе фильтров
    const addFilter = (items, term, filter) => {
        let arr = [];
        if ((filter.length === 0) && (term.length === 0)) {
                return items;
            } else {
                // Проверяем по фильтрам-кнопкам
                arr = items.filter(item => {
                    return item.country.indexOf(filter) > -1
                })
                // Проверяем по фильтру-строке
                return arr.filter(item => {
                        return item.country.indexOf(term) > -1
                })
        }   
    }

    // Переключение черех меню между страницами
    const onUpdatePage = (page) => {
        switch (page) { 
            case '2': setPageNow(2);
                      break;  
            case '3': setPageNow(3);
                      break;                
            case '4': setPageNow(4);
                      break;  
            default: setPageNow(1);
        }
    }
   
    // Обновить текст поиска
    const onUpdateSearch = (term) => {
        setTerm(term);
    }

    // Обновить фильтр по кнопкам
    const onFilterSelect = (newFilter) => {
        if (filter === newFilter) {
            setFilter('');    
        } else {
            setFilter(newFilter);    
        }
    }

    const onCardSelected = (country, price) => {
        setCurrentCountry(country);
        setCurrentPrice(price);
        setPageNow(4);
    }

    // Рендер карточек магазина
    const renderShopCards = (arr) => {
        let cards = arr.map((item,index) => {
          const nameCoffee = `${item.kind} ${item.weight} kg`
          const img = `./img/${item.urlimg}`
          return (
                  <div className="shop_card" key={index} onClick = {() => onCardSelected(item.country, item.price)}>
                      <img src={img} alt={item.kind} className="coffee_pic"/>
                      <div className="coffee_name">{nameCoffee}</div>
                      <div className="coffee_country">{item.country}</div>
                      <div className="coffee_price">{item.price}$</div>
                  </div>
          )})
        return cards
    }

    // Рендер топ 3 кофе
    const renderTopCards = (arr) => { 
        let topCards = arr.map((item,index) => {
        const imgURL = `./img/${item.img}`
        const altBestTop = `Best Coffee ${index}`
        return (
                <div className="footer_ext_best_card" key={index}>
                    <img src={imgURL} alt={altBestTop} className="best_coffee_pic"/>
                    <div className="coffee_name">{item.kind}</div>
                    <div className="coffee_price">{item.price}</div>
                </div>
        )})
        return topCards  
    }

    // Рендер вехнее или нижнее меню
    const renderMenu = (color='black') => {
        color = color !== 'black' ? {color: 'white'} : {color: 'black', marginTop: '22px'}
        const buttonsData = [
            {name: 'Coffee house'},
            {name: 'Our coffee'},
            {name: 'For your pleasure'},
        ];
        const buttons = buttonsData.map((item,index) => {
            // Синхронизируем отображение выбора пунктов двух меню через доп класс css
            const activeButton = pageNow === index+1 ? 'menu__link active' : 'menu__link'
            return (
                <li className="header__item" key={index}>
                    <button type="button" 
                                 className = {activeButton}
                                 style={color}
                                 onClick={() => onUpdatePage(`${index+1}`)}>
                                    {item.name}
                    </button>
                </li>
            )
        })

        return buttons
    }
    
    // Оставить только видимые элементы базы кофе
    const visibleData = addFilter(dbcoffee, term, filter); 
    let img = '';
    let title = '';
    let headerExt = null;
    let headerTitle = null;
    let styleFooter = null;
       switch (pageNow) {
            case 2: 
                img = 'coffee-shop.jpg';
                title = 'Our Coffee';
                headerTitle = <div className="header__logo_text">{title}</div> 
                styleFooter = {marginTop: '100px'} 
                break;
            case 3: 
                img = 'pleasure.jpg';
                title = 'For your pleasure';
                headerTitle = <div className="header__logo_text">{title}</div> 
                styleFooter = {marginTop: '100px'} 
                break;
            case 4: 
                img = 'coffee-shop.jpg';
                title = 'Our Coffee';
                headerTitle = <div className="header__logo_text">{title}</div> 
                //styleFooter = {marginTop: '100px'} 
                break;
            default:
                img = 'Main_bg.jpg'
                headerExt = <HeaderExt  onUpdatePage={onUpdatePage}/>
        }
        const headerUrl = {
                 background: `url(../img/${img})`
             }
         // backgroundRepeat: 'no-repeat'    
        
    return (
            <div className="container">
                <header>
                     <div className="wrapper" style={headerUrl}>
                         <Header  renderMenu={renderMenu}/>
                         {headerTitle}
                         {headerExt} 
                     </div>
                </header>
                <main>
                    <Section1 
                        pageNow={pageNow} 
                        country={currentCountry} 
                        price={currentPrice} 
                    />
                    <div className="coffee_shop">
                        <FilterPanel 
                            pageNow = {pageNow} 
                            filter = {filter} 
                            onFilterSelect={onFilterSelect} 
                            onUpdateSearch={onUpdateSearch}
                        />
                        <Section2 
                            pageNow={pageNow} 
                            arr={visibleData} 
                            dbtop={dbtop} 
                            renderTopCards={renderTopCards} 
                            renderShopCards={renderShopCards} 
                        />
                    </div>
                 </main>
                 <footer>
                    <div className="wrapper__footer" style={styleFooter}>
                        <Footer renderMenu={renderMenu}/>
                    </div>
                </footer>
            </div>
        )   
}


export default App;
