import React from 'react'

const LocationInfo = ({name, type, dimension, population}) => {
  return (
    <div>
        <h2>{name}</h2>
        <ul className='flx-drctn-rw mrgn-bttm-2'>
        <li>Type: {type} </li>
        <li>Dimension: {dimension} </li>
        <li>Population: {population} </li>
        </ul>
    </div>
  )
}

export default LocationInfo