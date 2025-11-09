import LightBG from '@/ui-components/themes/LightBG';
import CertificationGrid from './CertificationGrid';
import './Certifications.css';

function Certifications(){
    return(
        <LightBG>
            <h1>Certifications</h1>
            <hr />
            <br />
            <div className="certificates-content">
                <h1>Badges</h1>
                <div className="badges">
                    <img src="\assets\certificates\microsoft-ai.png" alt='Microsoft Azure AI T-900' />
                </div>
                <br />
                <h1>Training Certificates</h1>
                <br />
                <CertificationGrid type={"IT"} />
                <br />
                <h1>Activity Certificates</h1>
                <br />
                <CertificationGrid type={"College"} />
            </div>
        </LightBG>
    );
}

export default Certifications;