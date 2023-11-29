
import { useState } from 'react';
import './SearchBar.css'
export default function SearchBar({ func }) {
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (evt) => {
        const newVal = evt.target.value;
        setSearchTerm(newVal)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        func(searchTerm);
        setSearchTerm('');

    }

    return (
        <div className='SearchBar'>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="search-bar" className="search-label">Search for a show</label>
                <input type="text" placeholder='Show Name' value={searchTerm} onChange={handleChange} name="search-bar" id="search-bar" />
                <button>Search</button>
            </form>

        </div>
    )
}