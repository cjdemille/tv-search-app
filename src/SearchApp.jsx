import Show from './Show';
import'./SearchApp.css';
import {useState} from 'react';


  export default function SearchApp(){
    // const showTestData = [{
    //     id:139, 
    //     name: 'Girls', 
    //     rating: 6.5, 
    //     img:'https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg', 
    //     summary: 'This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.'
      
    //   }, 
    //   {
    //     id:140, 
    //     name: 'Girls', 
    //     rating: 6.5, 
    //     img:'https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg', 
    //     summary: 'This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.'
      
    //   }, 
    //   {
    //     id:130, 
    //     name: 'Girls', 
    //     rating: 6.5, 
    //     img:'https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg', 
    //     summary: 'This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.'
      
    //   }, 
    //   {
    //     id:131, 
    //     name: 'Girls', 
    //     rating: 6.5, 
    //     img:'https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg', 
    //     summary: 'This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.'
      
    //   }, 
    //   {
    //     id:132, 
    //     name: 'Girls', 
    //     rating: 6.5, 
    //     img:'https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg', 
    //     summary: 'This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.'
      
    //   }]
    const [showData, setShowData] = useState([]);
      
    const runSearch = async() => {
        const searchTerm = "charmed"
        try{
            const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
            setShowData(res.data);
        } catch (e){
            console.error(`Error fetching data: ${error}`);
        }
      }

    return(
        <div className='SearchApp'>
            <button onClick={runSearch}>Search!!!</button>
            {showData.map((s) => {
                return <Show key={s.show?.id} name={s.show.name} rating={s.show.rating.average} img={s.show?.image?.medium} summary={s.show?.summary}/>
            
  })}
           
        </div>
    )
}