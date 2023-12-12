import Show from './Show';
import './SearchApp.css';
import { useState } from 'react';
import SearchBar from './SearchBar';


export default function SearchApp() {

    const [showData, setShowData] = useState([]);

    const runSearch = async (searchTerm) => {
        try {
            const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
            setShowData(res.data);
        } catch (e) {
            console.error(`Error fetching data: ${error}`);
        }
    }

    return (
        <div className='SearchApp'>
            <SearchBar func={runSearch} />
            <section className="ShowResults">
                {showData.map((s) => {
                    return <Show key={s.show?.id} name={s.show.name} rating={s.show.rating.average} img={s.show?.image?.medium} summary={s.show?.summary} />
                })}
            </section>



        </div>
    )
}