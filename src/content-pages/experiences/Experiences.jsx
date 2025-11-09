import './Experiences.css';
import Organization from './organization-exp/Organization';
import BlackUpArrow from '../../ui-components/arrow-scroll/BlackUpArrow';
import WhiteDownArrow from '../../ui-components/arrow-scroll/WhiteDownArrow';
import Activities from './other-exp/Activities';
import DarkBG from '@/ui-components/themes/DarkBG';
import LightBG from '@/ui-components/themes/LightBG';

function Experiences(){
    return(
        <div className='multi-page-scroll'>
            <DarkBG>
                <h1>Organizational Experiences</h1>
                <hr />
                <br/>
                <div className="org-exp-grid">
                    <Organization name={"HIMTI"} />
                    <Organization name={"KMK"} />
                </div>
                <WhiteDownArrow />
            </DarkBG>
            <LightBG>
                <BlackUpArrow />
                <h1>Other Experiences</h1>
                <hr />
                <Activities />
            </LightBG>
        </div>
    )
}

export default Experiences;