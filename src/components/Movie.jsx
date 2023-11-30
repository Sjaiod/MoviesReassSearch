import React,{useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

import { useNavigate } from 'react-router-dom';

const Movie = ({image,title,_id,s,t,p}) => {
  const navigate=useNavigate()
  const navihatorFunc=(e)=>{
    e.preventDefault()
      navigate(`/movie/?&id=${_id}&s=${s}&p=${p}&t=${t}`)
  }
  return (
   <>
       <Col onClick={navihatorFunc} style={{paddingTop:"10px"}} sm={10} md={2}>
      <Image  style={{cursor:"pointer"}} src={image} className='Image' thumbnail />
      <div className="title">
        <p>{title}</p>
      </div>

      </Col>
      </>

  )
}

export default Movie
