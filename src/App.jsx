import './App.css'
import Profile from "./landing-pages/profile-page/Profile.jsx";
import ProjectGallery from './landing-pages/project-showcase/ProjectGallery.jsx';
import Navbar from './ui-components/navbar/Navbar.jsx';

function App() {
  return(
    <div>
      <Navbar/>
      <div className='multi-page-scroll'>
        <Profile />
        <ProjectGallery />
      </div>
    </div>
  );
}

export default App
