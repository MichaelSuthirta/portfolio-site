import '../../Theme.css'
import Greeting from './profile-components/greeting/Greeting';
import { useLayoutEffect } from 'react'
import Skills from './profile-components/Skills/Skills';
import WhiteDownArrow from '../../ui-components/arrow-scroll/WhiteDownArrow';

function Profile(){
    useLayoutEffect(() => {document.body.style.backgroundColor = "#2C2C2B"});

    return(
        <div className='dark' id='profile'>
            <Greeting />
            <hr/>
            <p>
                My name is Michael Suthirta, a 5th semester Computer Science student from BINUS University, Indonesia.<br/>
                I am passionate about designing and creating new things, which by integrating with technology, <br/>
                eventually aimed my interest towards Application Development. In recent times, I've been exploring Mobile <br/>
                Application development, learning about its concepts to strengthen my understanding of it.
            </p>
            <Skills/>
            {/* <br/>
            <br/> */}
            <WhiteDownArrow />
        </div>
    );
}

export default Profile