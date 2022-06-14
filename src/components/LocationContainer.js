import axios from 'axios'

const getLocation = async (searchValue) => {
    const URL = `https://rickandmortyapi.com/api/location/?name=${searchValue}`
    const req = await axios.get(URL)  
  return req
}

export default getLocation
// Petición a la API con prop searchValue (desde el componente App). Esta prop atrae el nombre de la ubicación.