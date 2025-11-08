import './Contacts.css';

function Contacts(){
    return(
        <div className="dark">
            <h1>Contacts</h1>
            <hr />
            <div className="centered">
                <div className='contact-row'>
                    <img src="\assets\content-UI\linkedin-white.png" className="contact-icon"></img>
                    <a href="https://www.linkedin.com/in/michael-suthirta-48160a372/">
                        <p>Michael Suthirta</p>
                    </a>
                    <img src="\assets\content-UI\github-white.png" className="contact-icon"></img>
                    <a href="https://github.com/MichaelSuthirta">
                        <p>MichaelSuthirta</p>
                    </a>
                    <img src="\assets\content-UI\email-white.png" className="contact-icon"></img>
                    <a href="mailto:michaelsuthirta@gmail.com">
                        <p>michaelsuthirta@gmail.com</p>
                    </a>
                    <img src="\assets\content-UI\phone-white.png" className="contact-icon"></img>
                    <p>+62 8818395983</p>
                </div>
            </div>
        </div>
    );
}

export default Contacts