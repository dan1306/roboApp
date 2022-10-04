import React from "react";



const SearchBox = (props) => {
    return (
        <div className="pa2">
            <input
                className="pa3 va v--green bg-lightest-blue "
                type="search"
                placeholder="search robots"
                onChange={props.searchChange}
                name = "searchInput"
            />   
        </div>
        )
}


export default SearchBox