import { useParams } from 'react-router-dom';
import '../../Theme.css';
import './Details.css';
import { ProjectList } from '../../project-maps/ProjectList';

function ProjectDetails(){
    const { id } = useParams();

    let data = ProjectList.find((project) => project.id === parseInt(id));

    return(
        <div className="dark">
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
                </div>
                <div className='content-row'>
                    <p>AAAA</p>
                    <div className='content-description'>
                        <div>
                            <h1>Description</h1>
                            <p>{data.description}</p>
                        </div>
                        <div className='personal'>
                            <div>
                                <h1>Roles</h1>
                                <ul style={{margin:5}}>
                                    {
                                        data.role.map(
                                            (role) => {
                                                return <li>{role}</li>
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
                                            (skill) => {
                                                return <li>{skill}</li>
                                            }
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails