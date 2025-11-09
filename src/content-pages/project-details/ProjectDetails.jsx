import { useParams } from 'react-router-dom';
import '../../Theme.css';
import './Details.css';
// import '../../ui-components/carousel/Carousel.css';
import { ProjectList } from '../../data-maps/ProjectList';
import Carousel from '../../ui-components/carousel/Carousel';
import DarkBG from '@/ui-components/themes/DarkBG';

function ProjectDetails(){
    const { id } = useParams();

    let data = ProjectList.find((project) => project.id === parseInt(id));

    const imageList = data.imagesList.map(
        (image, index) => (
            {
                key: index,
                val: (
                    <a href={image}>
                        <img src={image}/>
                    </a>
                )
            }
        )
    );

    return(
        <DarkBG>
            <div className='header'>
                <h1>{data.title} | </h1>
                <p style={{fontSize: 30}}> {data.date}</p>
            </div>
            <hr/>
            <div className="container">
                <div className='button-row'>
                    <a href={data.githubLink}>
                        <img src='/assets/content-UI/github-white.png' className='icon-button'/>
                    </a>
                    {
                        (data.demoLink) && //If there's demo link, create button
                        <a href={data.demoLink}>
                            <img src='/assets/content-UI/demo-white.png' className='icon-button'/>
                        </a>
                    }
                    {
                        (data.downloadLink) &&
                        <a href={data.downloadLink}>
                            <img src='/assets/content-UI/download-white.png' className='icon-button'/>
                        </a>
                    }
                    <br></br>
                </div>
                <div className='content-row'>
                    <div className='ss-container'>
                        <Carousel autoplay={true} list={imageList}/>
                        <p>(Click to see full image.)</p>
                    </div>
                    <div className='content-description'>
                        <div>
                            <h1>Description</h1>
                            <p>{data.description}</p>
                            <br/>
                            <h1>Status</h1>
                            <p>{data.status}</p>
                            <br />
                        </div>
                        <div className='personal'>
                            <div>
                                <h1>Roles</h1>
                                <ul style={{margin:5}}>
                                    {
                                        data.role.map(
                                            (role, index) => {
                                                return <li key={index} className='personal'>{role}</li>
                                            }
                                        )
                                    }
                                </ul>
                            </div>
                            <div>
                                <h1>Skills Learned</h1>
                                <ul style={{margin:5}}>
                                    {
                                        data.lessons.map(
                                            (skill, index) => {
                                                return <li key={index}>{skill}</li>
                                            }
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DarkBG>
    );
}

export default ProjectDetails