const Section2 = (props) => {
 
  const {pageNow, arr, dbtop} = props; 
  
  switch (pageNow) {
    case 2:
      return ( 
        <>
            <div className="shop_list">
              <div className="shop_list_row"> 
                {props.renderShopCards(arr)}
              </div>
            </div>
        </>
      )
    case 3:
      return ( 
        <>
            <div className="shop_list">
              <div className="shop_list_row"> 
                {props.renderShopCards(arr)}
              </div>
            </div>
        </>
      )
    case 4: 
      return null;
    default:
      const classOffset = {marginTop: '100px'};
      return (
        <div className="footer_ext" style={classOffset}>
            <div className="footer_ext_title">
                Our best
            </div>
            <div className="footer_ext_best_list">
                {props.renderTopCards(dbtop)}
            </div>
        </div>    
      )
  }
}

export default Section2;