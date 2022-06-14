import React from 'react'
import axios from 'axios'

const getResidentData = async ({residentConsult}) => {
    const URL = `${residentConsult}`
    const req = await axios.get(URL)  
  return console.log(residentConsult + 'Hola, es este...')
}

export default getResidentData