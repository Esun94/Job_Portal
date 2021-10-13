import React from 'react';

const SearchBar = ({placeholder, data}) => {
    return (
        <div className="search">
            <div className="searchInput">
                <input type="text" placeholder={placeholder} />
                <div className="searchIcon"></div>
            </div>
            <div className="dataResult"></div>
        </div>
    )
}

export default SearchBar;