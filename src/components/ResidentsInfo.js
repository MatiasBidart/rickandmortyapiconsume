import React from 'react'
import Resident from './Resident'

const ResidentsInfo = ({residentsURL}) => {
  return (
    <div className='rsdnts-grd'>
        {residentsURL.map((residentURL)=>{
            return (<Resident residentConsult={residentURL} key={residentURL}/>)
        })}

    </div>
  )
}

export default ResidentsInfo