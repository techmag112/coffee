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
        this.topbest = []
    }
    
    dbservice = new DBService()

    componentDidMount() {
        // Загружаем базы при формировании DOM
        this.topbest = this.dbservice.getBestKind()
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
    
    render() {
       const {pageNow, term, filter} = this.state;  
       // Оставить только видимые элементы базы кофе
       const visibleData = this.addFilter(this.dbcoffee, term, filter); 
       let img = '';
       let title = '';
       switch (pageNow) {
            case 2: 
                img = 'coffee-shop.jpg';
                title = 'Our Coffee';
                break;
            case 3: 
                img = 'pleasure.jpg';
                title = 'For your pleasure';
                break;
            default:
                img = 'Main_bg.jpg'
        }
        const headerUrl = {
                 background: `url(../img/${img})`
             }
         // backgroundRepeat: 'no-repeat'    
        const headerTitle = pageNow > 1 ? <div className="header__logo_text">{title}</div> : null;
        const headerExt = pageNow === 1 ? <HeaderExt/> : null;

        const styleFooter = pageNow > 1 ? {marginTop: '100px'} : null

        return (
            <div>
                <header>
                     <div className="wrapper" style={headerUrl}>
                         <Header onUpdatePage={this.onUpdatePage}/>
                         {headerTitle}
                         {headerExt}
                     </div>
                </header>
                <main>
                    <Section1 pageNow={pageNow}/>
                    <div className="coffee_shop">
                        <FilterPanel pageNow = {pageNow} filter = {filter} onFilterSelect={this.onFilterSelect} onUpdateSearch={this.onUpdateSearch}/>
                        <Section2 pageNow={pageNow} arr={visibleData} best={this.topbest}/>
                    </div>
                 </main>
                 <footer>
                    <div className="wrapper__footer" style={styleFooter}>
                        <Footer onUpdatePage={this.onUpdatePage}/>
                    </div>
                </footer>
            </div>
        )  
    } 
}
		
export default App;
