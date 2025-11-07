import BlackUpArrow from '../../ui-components/arrow-scroll/BlackUpArrow';
import '.\\ProjectGallery.css'
import '..\\..\\Theme.css'
import Carousel from '../../ui-components/carousel/Carousel';
import { ProjectList } from '../../data-maps/ProjectList';
import { Link } from 'react-router-dom';

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
        <div id="project-show" className='light'>
            <BlackUpArrow />
            <h1>My Projects</h1>
            <hr/>
            <br/>
            <div className='carousel'>
                <Carousel autoplay={true} list={projectList}/>
            </div>
        </div>
    );
}

export default ProjectGallery;