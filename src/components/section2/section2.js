const Section2 = (props) => {
 
  const {pageNow, arr, dbtop} = props; 
  
  switch (pageNow) {
    case 1:
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
    case 4: 
      return null;
    default:
          return ( 
            <>
                <div className="shop_list">
                  <div className="shop_list_row"> 
                    {props.renderShopCards(arr)}
                  </div>
                </div>
            </>
          )
  }
}

export default Section2;