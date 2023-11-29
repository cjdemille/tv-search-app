
import './App.css'
import SearchApp from './SearchApp'
import Show from './Show'

const showData = {id:139, 
  name: 'Girls', 
  rating: 6.5, 
  img:'https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg', 
  summary: 'This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.'}

function App() {
  return (
    <>
    <SearchApp/>
    </>
  )
}

export default App
