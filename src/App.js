import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import Index from './Components/Index';
import About from './Components/About';
import Courses from './Components/Courses';
import Contact from './Components/Contact';
import Registrationform from './Components/Registrationform';

function App() {
  return (
    <>
<HashRouter >
    <Routes>
       <Route path='/' element={<Index/>}/>
       <Route path='/courses' element={<Courses/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/registrationform' element={<Registrationform/>}/>
    </Routes>
</HashRouter>
    </>
  );
}

export default App;
