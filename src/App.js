import './App.css';
import getLocation from './components/LocationContainer';
import React,{useState, useEffect} from 'react';
import SearchBox from './components/SearchBox';
import LocationInfo from './components/LocationInfo';
import ResidentsInfo from './components/ResidentsInfo';

function App() {
// useStates para la data y el searchValue
  const[searchValue, setSearchValue] = useState('Gazorpazorp')
  const[initLocation,setInitLocation] = useState('')
  const[initType, setInitType] = useState('')
  const[initDimension, setInitDimension] = useState('')
  const[initPopulation, setInitPopulation] = useState('')
  const[residentsList, setResidentsList] = useState([])


// useEffect para la data desde LocationContainer
  useEffect(() => {
    getLocation(searchValue)
    .then((req)=>{
    // ---
      console.log(req.data)
      setInitLocation(req.data.results[0].name)
      setInitType(req.data.results[0].type)
      setInitDimension(req.data.results[0].dimension)
      setInitPopulation(req.data.results[0].residents.length)
      setResidentsList(req.data.results[0].residents)
    })
    console.log('si funcionó, mirá:' + searchValue)
    
  }, [searchValue])
  
  return (
    <div className="App">
      <img className='wdth-100 mrgn-bttm-2' src='https://cdn.shopify.com/s/files/1/0346/8063/5529/collections/rick-morty-collection-banner_1400x.jpg?v=1590095280' alt=''/>
      <SearchBox handlerSearch={setSearchValue}/>
      <LocationInfo name={initLocation} 
      type={initType}
      dimension={initDimension}
      population={initPopulation}
      />
      <ResidentsInfo residentsURL = {residentsList}/>
    </div>
  );
}

export default App;
