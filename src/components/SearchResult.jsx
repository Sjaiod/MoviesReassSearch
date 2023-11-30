import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Api } from './Api';
import NavBAAR from './Nav';
import { PuffLoader } from 'react-spinners'
import Movie from './Movie';
import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PaginationComponent from './PaginationComponent';
import Footer from './Footer';

const SearchResult = () => {
    const location = useLocation();
    const s = new URLSearchParams(location.search).get('s');
    const type = new URLSearchParams(location.search).get('type');
    const plot = new URLSearchParams(location.search).get('plot');
    const page = new URLSearchParams(location.search).get('page');
    const y = new URLSearchParams(location.search).get('y');
    const [data,setData]=useState()
    const [tp,setTp]=useState()
    const navigate=useNavigate()
    const getData=async()=>{
        const getData=await axios.get(`${Api}&s=${s}&type=${type}&plot=${plot}&y=${y}&page=${page}`).catch((e)=>{
          console.log(e);
        })
         if(getData){
          const date=await getData.data 
          console.log(getData.data);
          if(date){
            setData(date && date.Search)
            setTp(date && date.totalResults)
            
            console.log(data);
            


          }
         }
    }
    console.log(page);
    
    
    // Example usage: // Replace this with your actual totalResult value
    
    
  
    console.log(data);
    useEffect(()=>{
        if(s||type||plot||y){
            getData()
        }
    },[])

  return (
<>
<NavBAAR
s={s}
t={type}
p={plot}
/>
<main className='main-data' style={{display:"flex",flexDirection:"column"}}>
  {!data&&(
    <PuffLoader color="#5a2e98" />
  )}
  <Container>
    <Row >
  {data&& data.map((e)=>(
     
    <Movie 
    image={e.Poster}
    title={e.Title}
    _id={e.imdbID}
    s={s}
    t={type}
    p={plot}
    
    />
  ))}
  </Row>
  </Container>
  <Container>
    {page&&(
      <PaginationComponent data={setData} getData={getData} currentPage={page} s={s} type={type} plot={plot} totalResult={tp}/>
    )}
    
  </Container>
  <Footer/>
  
  
</main>
</>
  )
}

export default SearchResult
