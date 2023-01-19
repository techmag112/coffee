import { Component } from 'react';

import Header from '../header/header';
import HeaderExt from '../header-ext/headerExt';
import Section1 from '../section1/section1';
import Section2 from '../section2/section2';
import Footer from '../footer/footer';
import FilterPanel from '../filter-panel/filterPanel';
import DBService from '../services/DBService';

import './style.css'; 

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNow: '',
            term : '',
            filter: ''
        }
        this.dbcoffee = []
        this.dbtop = []
    }
    
    dbservice = new DBService()

    componentDidMount() {
        // Загружаем базы при формировании DOM
        this.dbtop = this.dbservice.getBestKind()
        // Прописываем номер страницы по умолчанию и делаем ререндинг компонент
        this.setState({ pageNow: 1 })
        this.dbcoffee = this.dbservice.getDBCofee()
    } 

    addFilter = (items, term, filter) => {
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
    onUpdatePage = (page) => {
        switch (page) { 
            case '2': this.setState({ pageNow: 2 });
                      break;  
            case '3': this.setState({ pageNow: 3 });
                      break;                
            case '4': this.setState({ pageNow: 3 });
                      break;  
            default: this.setState({ pageNow: 1 });
        }
    }
   
    // Обновить текст поиска
    onUpdateSearch = (term) => {
        this.setState({term});
    }

    // Обновить фильтр по кнопкам
    onFilterSelect = (filter) => {
        if (this.state.filter === filter) {
            this.setState({
                filter: '' });    
        } else {
            this.setState({filter});
        }
    }

    // Рендер карточек магазина
    renderShopCards = (arr) => {
        let cards = arr.map((item,index) => {
          const nameCoffee = `${item.kind} ${item.weight} kg`
          const img = `./img/${item.urlimg}`
          return (
                  <div className="shop_card" key={index}>
                      <img src={img} alt={item.kind} className="coffee_pic"/>
                      <div className="coffee_name">{nameCoffee}</div>
                      <div className="coffee_country">{item.country}</div>
                      <div className="coffee_price">{item.price}$</div>
                  </div>
          )})
        return cards
    }

    // Рендер топ 3 кофе
    renderTopCards = (arr) => { 
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
    renderMenu = (color='black') => {
        color = color !== 'black' ? {color: 'white'} : {color: 'black', marginTop: '22px'}
        const buttonsData = [
            {name: 'Coffee house'},
            {name: 'Our coffee'},
            {name: 'For your pleasure'},
        ];
        const buttons = buttonsData.map((item,index) => {
            return (
                <li className="header__item" key={index}>
                    <button type="button" 
                                 className='menu__link'
                                 disabled = {this.pageNow ? true : false}
                                 style={color}
                                 onClick={() => this.onUpdatePage(`${index+1}`)}>
                                    {item.name}
                                 </button>
                </li>
            )
        })

        return buttons
    }
    
    render() {
       const {pageNow, term, filter} = this.state;  
       // Оставить только видимые элементы базы кофе
       const visibleData = this.addFilter(this.dbcoffee, term, filter); 
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
                styleFooter = {marginTop: '100px'} 
                break;
            default:
                img = 'Main_bg.jpg'
                headerExt = <HeaderExt  onUpdatePage={this.onUpdatePage}/>
        }
        const headerUrl = {
                 background: `url(../img/${img})`
             }
         // backgroundRepeat: 'no-repeat'    
        
        return (
            <div className="container">
                <header>
                     <div className="wrapper" style={headerUrl}>
                         <Header  renderMenu={this.renderMenu}/>
                         {headerTitle}
                         {headerExt} 
                     </div>
                </header>
                <main>
                    <Section1 pageNow={pageNow}/>
                    <div className="coffee_shop">
                        <FilterPanel 
                            pageNow = {pageNow} 
                            filter = {filter} 
                            onFilterSelect={this.onFilterSelect} 
                            onUpdateSearch={this.onUpdateSearch}
                        />
                        <Section2 
                            pageNow={pageNow} 
                            arr={visibleData} 
                            dbtop={this.dbtop} 
                            renderTopCards={this.renderTopCards} 
                            renderShopCards={this.renderShopCards} 
                        />
                    </div>
                 </main>
                 <footer>
                    <div className="wrapper__footer" style={styleFooter}>
                        <Footer renderMenu={this.renderMenu}/>
                    </div>
                </footer>
            </div>
        )  
    } 
}
		
export default App;
