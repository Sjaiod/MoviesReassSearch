import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import { Api } from './Api';
import NavBAAR from './Nav';
import { PuffLoader } from 'react-spinners'
import {Container,Image} from 'react-bootstrap'
import './Single.css'
import Footer from './Footer';

const Single = () => {
  const [data,setData]=useState()

  const location = useLocation();
    const _id = new URLSearchParams(location.search).get('id');
    const s = new URLSearchParams(location.search).get('s');
    const t = new URLSearchParams(location.search).get('t');
    const p = new URLSearchParams(location.search).get('p');
    const getData=async()=>{
      const getData=await axios.get(`${Api}&i=${_id}`).catch((e)=>{
        console.log(e);
      })
       if(getData){
        const date=await getData.data 
        console.log(getData.data);
        if(date){
          setData(date && date)
          console.log(data);
          


        }
       }
  }
  useEffect(()=>{
  getData()
  },[])
  return (
    <div>
      <NavBAAR
      s={s}
      t={t}
      p={p}
      />
          {!data&&(
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"15px"}}>
      <PuffLoader color="#5a2e98" /></div>
    )}
    {data&&(
      <Container className='c-container'>
      <div className="img-movie-div" > 
      <Image className='img-movie' src={ data.Poster} fluid />
      <div className="title-section">
        <h3>{data.Title}</h3>
       
          <p>{data.imdbRating}/10</p>
      </div>
      <div style={{width:"100%",}}>
      <p style={{position:"stick",color:"#57b8ff",left:"1%"}}>{data.Released}</p>
      </div>
      <div className="genra-section">
       <p>Genre: {data.Genre}</p>
       <p>Rated: {data.Rated}</p>
      </div>
      <div style={{width:"100%"}}>
        <p >{data.Plot}</p>
        </div>
        <div className="performer">
          <p style={{display:"flex"}}>Runtime: <p style={{color:'#57b8ff'}}> {data.Runtime}</p></p>
          <p>Country: {data.Country}</p>
          <p style={{display:"flex"}}>Imdb Votes:  <p style={{color:'#57b8ff'}}>{data.imdbVotes}</p></p>
          <p style={{display:"flex"}}>Metascore: <p style={{color:'#57b8ff'}}>{data.Metascore}</p></p>

          <p>Type: {data.Type}</p>
          <p>Actors: {data.Actors}</p>

          <p>Director: {data.Director}</p>
          <p>Writer: {data.Writer}</p>
          <p>Awards: {data.Awards}</p>
          <p>Languages: {data.Language}</p>
          
        </div>
      </div>
      <Footer/>
   
    </Container>
    )}
    
      
    </div>

  )
}

export default Single
