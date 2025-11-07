import { Route, Routes } from 'react-router-dom';
import './App.css'

import Navbar from './ui-components/navbar/Navbar.jsx';
import Home from './landing-pages/home/Home.jsx';
import ProjectDetails from './content-pages/project-details/ProjectDetails.jsx';
import Experiences from './content-pages/experiences/Experiences.jsx';

function App() {
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/details/:id' element={<ProjectDetails/>} />
        <Route path='/experiences' element={<Experiences/>} />
      </Routes>
    </div>
  );
}

export default App
