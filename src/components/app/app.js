import { Component } from 'react';

import Header from '../header/header';
import HeaderExt from '../header-ext/headerExt';
import Section1 from '../section1/section1';
import Section2 from '../section2/section2';
import Footer from '../footer/footer';
import FilterPanel from '../filter-panel/filterPanel';

import './style.css'; 

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNow: 1,
            term : '',
            filter: ''
        }
        this.dbcoffee = [
           {kind: 'AROMISTICO Coffee', weight: 1, country: 'Brazil', price: 6.99, urlimg: 'coffee-default.jpg'},
           {kind: 'AROMISTICO Coffee', weight: 1, country: 'Kenya', price: 9.99, urlimg: 'coffee-default.jpg'},
           {kind: 'AROMISTICO Coffee', weight: 1, country: 'Columbia', price: 12, urlimg: 'coffee-default.jpg'},
           {kind: 'AROMISTICO Coffee', weight: 1, country: 'Brazil', price: 8.3, urlimg: 'coffee-default.jpg'},
           {kind: 'AROMISTICO Coffee', weight: 1, country: 'Brazil', price: 12.99, urlimg: 'coffee-default.jpg'},
           {kind: 'AROMISTICO Coffee', weight: 1, country: 'Columbia', price: 10, urlimg: 'coffee-default.jpg'},
           {kind: 'AROMISTICO Coffee', weight: 1, country: 'Brazil', price: 15.99, urlimg: 'coffee-default.jpg'},
           {kind: 'AROMISTICO Coffee', weight: 1, country: 'Kenya', price: 7.5, urlimg: 'coffee-default.jpg'},
           {kind: 'AROMISTICO Coffee', weight: 1, country: 'Kenya', price: 12, urlimg: 'coffee-default.jpg'}
        ]
        this.topbest = [
            {kind: 'Solimo Coffee Beans 2 kg', price: 10.73, img: 'best01.jpg'},
            {kind: 'Presto Coffee Beans 1 kgg', price: 15.99, img: 'best02.jpg'},
            {kind: 'AROMISTICO Coffee 1 kg', price: 6.99, img: 'best03.jpg'}
        ]
        
    }
    
    componentDidMount() {
        this.numberPage = document.querySelector('.header__list');
        this.numberPage.addEventListener('click', this.updatePage)
    } 

    componentWillUnmount() {
        this.numberPage.removeEventListener('click', this.updatePage)
    }

    updatePage = (event) => {
         if (event.target.classList.contains('header__link1')) { 
             this.setState({
                 pageNow: 1  
             });
         } 
         if (event.target.classList.contains('header__link2')) { 
             this.setState({
                pageNow: 2
            })  
          } 
        if (event.target.classList.contains('header__link3')) { 
             this.setState({
                 pageNow: 3  
             });
        } 
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

   
    onUpdateSearch = (term) => {
        this.setState({term});
    }

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
                 background: `url(../img/${img})`,
                 backgroundRepeat: 'no-repeat'
             }
        const headerTitle = pageNow > 1 ? <div className="header__logo_text">{title}</div> : null;
        const headerExt = pageNow === 1 ? <HeaderExt/> : null;

        return (
            <div>
                <header>
                     <div className="wrapper" style={headerUrl}>
                         <Header pageNow = {pageNow} onUpdatePage={this.onUpdatePage}/>
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
                <FooterHTML5 pageStatus = {this.state}/>
            </div>
        )  
    } 
}

function FooterHTML5({pageStatus}) {
    const {pageNow} = pageStatus;
    const styleFooter = pageNow > 1 ? {marginTop: '100px'} : null
   
    return (
      <footer>
        <div className="wrapper__footer" style={styleFooter}>
            <Footer/>
        </div>
      </footer>
    )
}

		
export default App;
