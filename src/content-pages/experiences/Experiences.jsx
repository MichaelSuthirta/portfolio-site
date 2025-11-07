import './Experiences.css';
import Organization from './organization-exp/Organization';

function Experiences(){
    return(
        <div className="dark">
            <h1>Organizational Experiences</h1>
            <hr />
            <br/>
            <div className="org-exp-grid">
                <Organization name={"HIMTI"} />
                <Organization name={"KMK"} />
            </div>
        </div>
    )
}

export default Experiences;