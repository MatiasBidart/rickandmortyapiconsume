import React,{useState} from 'react'

const SearchBox = ({handlerSearch}) => {
   const [search, setSearch] = useState('Gazorpazorp')
  return (
    <div>
        <input type='search' 
        id='srchByLctn' 
        placeholder='Search by location...' 
        onChange={(e)=> setSearch(e.target.value)}>
        </input>
        <button htmlFor='srchByLctn' 
        onClick={(e)=> handlerSearch(search)}>Search</button>
    </div>
  )
}

export default SearchBox