

class DBService {

//   список кофе в JSON формате
  _coffeeJSON = `[
    {"kind": "AROMISTICO Coffee", "weight": 1, "country": "Brazil", "price": 6.99, "urlimg": "coffee-default.jpg"},
    {"kind": "AROMISTICO Coffee", "weight": 1, "country": "Kenya", "price": 9.99, "urlimg": "coffee-default.jpg"},
    {"kind": "AROMISTICO Coffee", "weight": 1, "country": "Columbia", "price": 12.00, "urlimg": "coffee-default.jpg"},
    {"kind": "AROMISTICO Coffee", "weight": 1, "country": "Brazil", "price": 8.30, "urlimg": "coffee-default.jpg"},
    {"kind": "AROMISTICO Coffee", "weight": 1, "country": "Brazil", "price": 12.99, "urlimg": "coffee-default.jpg"},
    {"kind": "AROMISTICO Coffee", "weight": 1, "country": "Columbia", "price": 10.00, "urlimg": "coffee-default.jpg"},
    {"kind": "AROMISTICO Coffee", "weight": 1, "country": "Brazil", "price": 15.99, "urlimg": "coffee-default.jpg"}, 
    {"kind": "AROMISTICO Coffee", "weight": 1, "country": "Kenya", "price": 7.50, "urlimg": "coffee-default.jpg"},
    {"kind": "AROMISTICO Coffee", "weight": 1, "country": "Kenya", "price": 12.00, "urlimg": "coffee-default.jpg"}
  ]`;

  _topBestJSON = `[
    {"kind": "Solimo Coffee Beans 2 kg", "price": 10.73, "img": "best01.jpg"},
    {"kind": "Presto Coffee Beans 1 kgg", "price": 15.99, "img": "best02.jpg"},
    {"kind": "AROMISTICO Coffee 1 kg", "price": 6.99, "img": "best03.jpg"}
  ]`;

  getDBCofee = (count = 9) => {
    // Регулирование вывода числа карт на страницу
    if (count > 9) {
      count = 9
    } 
   // возврат базы магазина
    let arr = JSON.parse(this._coffeeJSON);
    return arr.slice(0, count);
  }

  getBestKind = () => {
     // возврат Топа 3 кофе
     return JSON.parse(this._topBestJSON);
   }

 }

export default DBService;