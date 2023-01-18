

const Section2 = (props) => {
 
  const {pageNow, arr, best} = props; 
  
  if (pageNow === 1) {
    let classOffset = {marginTop: '100px'};
    
    return (
      <div className="footer_ext" style={classOffset}>
          <div className="footer_ext_title">
              Our best
          </div>
          <div className="footer_ext_best_list">
              {topBest(best)}
          </div>
      </div>    
    )
  } else {
      return ( 
        <>
            <div className="shop_list">
              <div className="shop_list_row"> 
                {renderShopCard(arr)}
              </div>
            </div>
        </>
      )
   }
}

const topBest = (best) => { 
  let topCards = best.map((item,index) => {
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

const renderShopCard = (arr) => {
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
 
export default Section2;