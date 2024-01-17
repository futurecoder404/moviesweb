
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './component/Header/Header';
import SimpleBottomNavigation from './component/MainNav';
 
//import { Switch } from '@mui/material';
import { Container } from '@mui/material';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="app"> 
     <Container>
      
       <Routes>
        <Route path='/' element={<Trending/>} />
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes> 
     </Container>
     
     </div>
      <SimpleBottomNavigation/>
    
    </BrowserRouter>
    
  );
}

export default App;
