import Profile from "../profile-page/Profile.jsx";
import ProjectGallery from '../project-showcase/ProjectGallery.jsx';
import './Home.css';

function Home(){
    return(
      <div className='multi-page-scroll'>
        <Profile />
        <ProjectGallery />
      </div>
    )
}

export default Home;