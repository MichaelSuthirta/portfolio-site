import BlackUpArrow from '../../ui-components/arrow-scroll/BlackUpArrow';
import '.\\ProjectGallery.css'
import '..\\..\\Theme.css'
import Carousel from '../../ui-components/carousel/Carousel';
import { ProjectList } from '../../data-maps/ProjectList';
import { Link } from 'react-router-dom';
import LightBG from '@/ui-components/themes/LightBG';

function ProjectGallery(){
    const projectList = ProjectList.map(
        (project) => ({
            key: project.id,
            val: (
                <Link to={{pathname: "/details/" + project.id}}>
                    <img src={project.mainImgUrl}/>
                    <p className="project-title">{project.title}</p>
                </Link>
            )
        })
    )

    return(
        <LightBG id="project-show">
            <BlackUpArrow />
            <h1>My Projects</h1>
            <hr/>
            <br/>
            <div className='carousel'>
                <Carousel autoplay={true} list={projectList}/>
            </div>
        </LightBG>
    );
}

export default ProjectGallery;