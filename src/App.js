import './styles/App.css';
// import NavBar from './components/navBar';
import {Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Profesionals from './components/Profesionals';
import Staff from './components/Staff';
import AppBarMUI from './components/AppBarMUI';
import Contact_us from './components/Contact_us';
import About_us from './components/About_us';
import Appointment from './components/Appointment';

function App() {


  return (
    <div className="App">
      {/* <NavBar/> */}
      <AppBarMUI/>
      <Routes>
        <Route path='*' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/profesionals' element={<Profesionals/>}/>
        <Route path='/Staff' element={<Staff/>}/>
        <Route path='/Contact_us' element ={<Contact_us/>}/>
        <Route path='/About_us' element ={<About_us/>}/>
        <Route path='/Appointment' element={<Appointment/>}/>
       

      </Routes>
    

   

    </div>
  );
}

export default App;
