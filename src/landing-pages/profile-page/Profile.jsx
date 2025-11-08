import '../../Theme.css'
import './Profile.css';
import { useLayoutEffect } from 'react'
import WhiteDownArrow from '../../ui-components/arrow-scroll/WhiteDownArrow';

function Profile(){
    return(
        <div className='dark' id='profile'>
            <div className='framed-text'>
                <h1 className='name'>MICHAEL<br/>SUTHIRTA</h1>
            </div>
            <div className='profile-grid'>
                <div>
                    <p>
                    My name is Michael Suthirta, a 5th semester Computer Science student from BINUS University, Indonesia. 
                    I am passionate about designing and creating new things, which by integrating with technology,
                    eventually aimed my interest towards Application Development. In recent times, I've been exploring Mobile
                    Application development, learning about its concepts to strengthen my understanding of it.
                    </p>
                </div>
                <div id='skills'>
                    <h1>My skills</h1>
                    <hr></hr>
                    <ul>
                        <li>
                            Basic Flutter framework programming
                        </li>
                        <li>
                            Basic Java, Python, C, and C# programming
                        </li>
                        <li>
                            Basic HTML and CSS
                        </li>
                    </ul>
                </div>
            </div>
            <WhiteDownArrow />
        </div>
    );
}

export default Profile