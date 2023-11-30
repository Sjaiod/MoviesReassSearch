import React from 'react'
import {Routes,Route} from'react-router-dom'
import Home from './components/Home'
import SearchResult from './components/SearchResult'
import 'bootstrap/dist/css/bootstrap.min.css';
import Single from './components/Single';
const LazySearchResult=React.lazy(()=>import('./components/SearchResult'))

const App = () => {
 return (
 <>
  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/search'element={<SearchResult/>}/>
      <Route path='/movie' element={<Single/>}/>
   </Routes>
  </>
 )
}

export default App
