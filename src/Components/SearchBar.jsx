import React, { useEffect, useState } from 'react'
import { searchQuery } from '../Services/weatherapi';

const SearchBar = ({ onSearchResults }) => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const handleChange = (event) => {
        const inputLength = event.target.value.length;
        const results = document.querySelector('#results');

        if (inputLength >= 3) {
            setSearchValue(event.target.value);
            searchQuery(searchValue)
                .then(res => setSearchResult(res))
                .catch(err => console.error(err));
            if (results)
                results.style.opacity = 1;
        } else if (inputLength < 3 && document.querySelector('#results')) {
            setSearchResult([]);
            if (results)
                results.style.opacity = 0;
        }
    }

    useEffect(() => {

    })

    const handleSearchClick = (name, country) => {
        const data = { name, country };
        onSearchResults(data);
        setSearchValue('');
    }

    return (
        <div className='w-fit'>
            <input
                id='search'
                type="text"
                title='Search'
                placeholder='Search'
                onChange={handleChange}
                className='p-3 rounded-md text-gray-100 bg-gray-900 md:w-[22rem] w-[19rem] border-2 border-gray-800'
            />

            {searchResult && searchValue.length > 2 &&
                <div 
                    id='results'
                    className='absolute z-10 mt-2 md:w-[22rem] w-[19rem] rounded-md bg-gray-900 text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    {searchResult.map((item) => (
                        <button
                            className='p-3 w-full rounded-md hover:bg-gray-800'
                            onClick={() => handleSearchClick(item.name, item.country)} >
                            {item.name}, {item.country}
                        </button>
                    ))}
                </div>
            }
        </div>
    )
}

export default SearchBar