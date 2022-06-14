import axios from 'axios'
import React, {useState, useEffect} from 'react'

const Resident = ({residentConsult}) => { 
const[residentName, setResidentName] = useState('')
const[residentImage,setResidentImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXt1YXyNQmkaW-KhB-3LfDTAQXFIK2FhNo5Q&usqp=CAU')
const[residentStatus, setResidentStatus] = useState ('')
const[residentOrigin, setResidentOrigin] = useState ('')
const[residentEpisodes, setResidentEpisodes] = useState ('')

// 
    const getResidentData = async (residentConsult) => {
        const URL2 = residentConsult
        const residentResponseData = await axios.get(URL2)
        return residentResponseData
    }
    
// 
useEffect(() => {
getResidentData(residentConsult)
.then((residentResponseData)=>{
    console.log(residentResponseData)
    setResidentName(residentResponseData.data.name)
    setResidentImage(residentResponseData.data.image)
    setResidentStatus(residentResponseData.data.status)
    setResidentOrigin(residentResponseData.data.origin.name)
    setResidentEpisodes(residentResponseData.data.episode.length)
})
}, [residentConsult])



// 
  return (
    <div className='wdth-4rem'>
    <img src={residentImage} alt=''/>
    <h4>{residentName}</h4>
    <ul>
        <li>Status: {residentStatus}</li>
        <li>Origin: {residentOrigin}</li>
        <li>Episodes: {residentEpisodes}</li>
    </ul>
    <hr></hr>
    </div>
  )
}

export default Resident