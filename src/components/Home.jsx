import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Search.css'
import { IoIosSearch } from "react-icons/io";
import Message from './Message';
import axios from 'axios';
import { Api } from './Api';

const Home = () => {
  const [search,setSearch]=useState("")
  const [year,setYear]=useState()
  const [type,setType]=useState("")
  const [plot,setPlot]=useState("")
  const [message,setMessage]=useState()
  const [messageVisible, setMessageVisible] = useState(false);
  const navigate=useNavigate()
  
  const handleSearch=async(e)=>{
    e.preventDefault()
    if(search==""){
      setMessageVisible(true);
      setMessage("Invalid search")
      // Hide the message after a certain period (e.g., 3 seconds)
      setTimeout(() => {
        setMessageVisible(false);
      }, 4000);
    }else{
      navigate(`/search/?&s=${search}&type=${type}&plot=${plot}&y=${year}`)
     // const getData=await axios.get(`${Api}&s=${search}&type=${type}&plot=${plot}&y=${year}`)
     // if(getData){
      //  const data=await getData.data
       // console.log(data);
     // }

    }
  }
  
  return (<>
  {messageVisible&&(
   <Message message={message}/>
  )}
   

    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div className="a" style={{marginTop:"20%",gap:"10px"}}>
        <div className="logo">Movies</div>
        <form action="" onSubmit={handleSearch}>
        <div className='search-bar-div' style={{display:"flex"}}>
        <input type="text" onChange={e=>setSearch(e.target.value)} placeholder='Search your movie' className="search-bar" />
        <button type='submit' className=" btn-search"><IoIosSearch  className='search-icon'/>
        
      
    </button></div></form>

        <div className='options'>
      <div className="type"><p>Types</p></div>
      <div className="type-items">
        <li  style={{background:type==="movie"?"rgb(22 0 52)":""}} onClick={e=>{setType("movie")}}><h2 >Movies</h2></li>
        <li onClick={e=>{setType("series")}}  style={{background:type==="series"?"rgb(22 0 52)":""}}><h2 >Series</h2></li>
        <li  onClick={e=>{setType("epsode")}} style={{background:type==="epsode"?"rgb(22 0 52)":""}}><h2 >Epsode</h2></li>
      </div>
      <div className="plot"><p>Plot</p></div>
      <div className="plot-items">
        <li onClick={e=>{setPlot("short")}} style={{background:plot==="short"?"rgb(22 0 52)":""}}><h2>Short</h2></li>
        <li onClick={e=>{setPlot("full")}} style={{background:plot==="full"?"rgb(22 0 52)":""}}><h2>Full</h2></li>
      </div>
      <div ><input value={year} onChange={e=>{if(e.target.value.length>4){alert("Not a valid year")}else(setYear(e.target.value))}} type="number" placeholder='Year' className='year'  /></div>
    </div>
        </div>

      </div>
      </>
  )
}

export default Home
