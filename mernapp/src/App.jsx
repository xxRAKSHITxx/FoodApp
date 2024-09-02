import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './screens/Login';
import Home from './screens/Home';
import Footer from './components/footer';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {


  return (
    <>
      {/* <div><Navbar/></div> */}
        
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
        
        </Routes>
      
      
    </>
  )
}

export default App


