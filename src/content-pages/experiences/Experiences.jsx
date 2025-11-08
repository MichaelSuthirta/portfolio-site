import './Experiences.css';
import Organization from './organization-exp/Organization';
import BlackUpArrow from '../../ui-components/arrow-scroll/BlackUpArrow';
import WhiteDownArrow from '../../ui-components/arrow-scroll/WhiteDownArrow';
import Activities from './other-exp/Activities';

function Experiences(){
    return(
        <div className='multi-page-scroll'>
            <div className="dark">
                <h1>Organizational Experiences</h1>
                <hr />
                <br/>
                <div className="org-exp-grid">
                    <Organization name={"HIMTI"} />
                    <Organization name={"KMK"} />
                </div>
                <WhiteDownArrow />
            </div>
            <div className='light'>
                <BlackUpArrow />
                <h1>Other Experiences</h1>
                <hr />
                <Activities />
            </div>
        </div>
    )
}

export default Experiences;