const FilterPanel = (props) => {
    let switchFilter = null;
    const line = (props.pageNow === 2 || props.pageNow === 3) ? <div className="shop_line"><img src="./img/svg/Line.svg" alt="Line" className="coffee_line"/></div> : null
    if (props.pageNow === 2) {
        const buttonsData = [
            {name: 'Brazil'},
            {name: 'Kenya'},
            {name: 'Columbia'}
        ];
        const buttons = buttonsData.map(({name}) => {
            const active = props.filter === name ? 'btn_filter_up' : 'btn_filter';
            return (
                <button type="button"
                        className={active}
                        key={name}
                        onClick={() => props.onFilterSelect(name)}>
                        {name}
                </button>
            )
        })
        
        const onUpdateSearch = (e) => {  // Эта локальная! 
                const term = e.target.value;
                props.onUpdateSearch(term); // А эта из компонета Апп!
        }
        
        switchFilter = (
            <div className="wrapper_filter">
                <div className="wrapper_filter_input_text">
                    Lookiing for
                </div>
                <div className="wrapper_filter_input">
                    <input type="search" 
                           inputMode="'latin" 
                           placeholder="start typing here..."
                           onChange={onUpdateSearch}/>
                </div>
                <div className="wrapper_filter_button_text">
                    Or filter
                </div>    
                <div className="wrapper_filter_button">
                    {buttons}
                </div>    
            </div>
        )
    }
    return (
        <div className="shop_list">
            {line}
            {switchFilter}
        </div>
    )
}

export default FilterPanel;