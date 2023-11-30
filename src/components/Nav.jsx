import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Search.css'
import { IoIosSearch } from "react-icons/io";
import Message from './Message';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBAAR = ({s,t,p}) => {
    const [search,setSearch]=useState(s||"")
    const [year,setYear]=useState()
    const [type,setType]=useState(t||"")
    const [plot,setPlot]=useState(p||"")
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
        navigate(0)
       // const getData=await axios.get(`${Api}&s=${search}&type=${type}&plot=${plot}&y=${year}`)
       // if(getData){
        //  const data=await getData.data
         // console.log(data);
       // }
  
      }
    }
    
  return (
<Navbar expand="lg" style={{boxShadow:"0 0 0 2px #eee ",padding:"0"}} className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className='logo' href="/">Movies</Navbar.Brand>
        <Navbar.Toggle color='#eee' aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form style={{marginRight:"10px"}} onSubmit={handleSearch} className="d-flex">
          <NavDropdown  title="Plot"  color='#eee 
          
          !important'
          style={{padding:"0 10px"}}
           id="navbarScrollingDropdown" >
            <NavDropdown.Item  style={{background:plot==="short"?"#0d6efd":""}} onClick={e=>{setPlot("short")}} href="#action3">Short</NavDropdown.Item>
            <NavDropdown.Item onClick={e=>{setPlot("full")}}  style={{background:plot==="full"?"#0d6efd":""}} href="#action4">
            Full
            </NavDropdown.Item>
           
          </NavDropdown>

          <NavDropdown  title="Type"  color='#eee 
          
          !important'
          style={{padding:"0 10px"}}
           id="navbarScrollingDropdown" >
            <NavDropdown.Item  style={{background:type==="movie"?"#0d6efd":""}} onClick={e=>{setType("movie")}} href="#action3">Movies</NavDropdown.Item>
            <NavDropdown.Item onClick={e=>{setType("series")}}  style={{background:type==="series"?"#0d6efd":""}} href="#action4">
            Series
            </NavDropdown.Item>
           
            <NavDropdown.Item onClick={e=>{setType("epsode")}} style={{background:type==="epsode"?"#0d6efd":""}} href="#action5">
            Epsode
            </NavDropdown.Item>
          </NavDropdown>

            <Form.Control
              type="search"
              value={search}
              onChange={e=>setSearch(e.target.value)} placeholder='Search your movie'
              className="me-2"
              aria-label="Search"
            />
            <Button type='submit' variant="outline-success">Search</Button>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
 
}

export default NavBAAR
