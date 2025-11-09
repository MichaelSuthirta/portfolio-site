import '../../Theme.css'
import './Profile.css';
import WhiteDownArrow from '../../ui-components/arrow-scroll/WhiteDownArrow';
import DarkBG from '@/ui-components/themes/DarkBG';

function Profile(){
    return(
        <DarkBG id='profile'>
            <div className='profile-contact-row'>
                <a href='mailto:michaelsuthirta@gmail.com'>
                    <img src = '\assets\content-UI\email-white.png' className='profile-contact-icon' />
                </a>
                <a href='https://github.com/MichaelSuthirta'>
                    <img src = '\assets\content-UI\github-white.png' className='profile-contact-icon' />
                </a>
                <a href='https://www.linkedin.com/in/michael-suthirta-48160a372/'>
                    <img src = '\assets\content-UI\linkedin-white.png' className='profile-contact-icon' />
                </a>
            </div>
            <div className='framed-text'>
                <div className='name-box'>
                    <h1 className='name'>MICHAEL<br/>SUTHIRTA</h1>
                </div>
            </div>
            <div className='profile-grid'>
                <div>
                    <p className='intro'>
                    Hello! My name is Michael Suthirta, a 5th semester Computer Science student from BINUS University, Indonesia. 
                    I am passionate about designing and creating new things, which by integrating with technology,
                    eventually aimed my interest towards Application Development. In recent times, I've been exploring Mobile
                    Application development, learning about its concepts to strengthen my understanding of it.
                    </p>
                </div>
                <div id='skills'>
                    <h1>My skills</h1>
                    <hr></hr>
                    <div className='skill-content'>
                        <div>
                            <ul>
                                <li>
                                    Intermediate English
                                </li>
                                <li>
                                    Collaboration and Teamworking
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    Basic Flutter framework
                                </li>
                                <li>
                                    Basic Java, Python, C, and C#
                                </li>
                                <li>
                                    Basic HTML and CSS
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            <WhiteDownArrow />
        </DarkBG>
    );
}

export default Profile