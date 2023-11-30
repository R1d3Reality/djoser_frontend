import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setQuery(inputValue);
        onSearch(inputValue);
    };

    return (
        <form className='search'>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search paints..."
                className='search-input'
            />
        </form>
    );
};

export default SearchBox;
