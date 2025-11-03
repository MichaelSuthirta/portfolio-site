import BlackUpArrow from '../../ui-components/arrow-scroll/BlackUpArrow';
import '.\\ProjectGallery.css'
import '..\\..\\Theme.css'
import Carousel from './gallery-components/carousel/Carousel';

function ProjectGallery(){
    return(
        <div id="project-show" className='light'>
            <BlackUpArrow />
            <h1>My Projects</h1>
            <hr/>
            <br/>
            <Carousel />
        </div>
    );
}

export default ProjectGallery;