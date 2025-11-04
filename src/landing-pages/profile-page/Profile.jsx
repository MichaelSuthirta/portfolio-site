import '../../Theme.css'
import './Profile.css';
import { useLayoutEffect } from 'react'
import WhiteDownArrow from '../../ui-components/arrow-scroll/WhiteDownArrow';

function Profile(){
    useLayoutEffect(() => {document.body.style.backgroundColor = "#2C2C2B"});

    return(
        <div className='dark' id='profile'>
            <h1 id='greeting'>Hello!</h1>
            <hr/>
            <p>
                My name is Michael Suthirta, a 5th semester Computer Science student from BINUS University, Indonesia.<br/>
                I am passionate about designing and creating new things, which by integrating with technology, <br/>
                eventually aimed my interest towards Application Development. In recent times, I've been exploring Mobile <br/>
                Application development, learning about its concepts to strengthen my understanding of it.
            </p>
            <div id="skills">
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
            <WhiteDownArrow />
        </div>
    );
}

export default Profile