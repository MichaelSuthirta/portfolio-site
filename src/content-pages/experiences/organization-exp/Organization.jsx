import { OrganizationList } from "../../../data-maps/OrganizationList";
import './Organization.css';

function Organization({name}){
    let data = OrganizationList.find((organization) => organization.abbrev.toLowerCase() === name.toLowerCase());
    console.log(data);
    return(
        <div className="org-data-col">
            <div className="org-top-part">
                <img src={data.logo} className="org-logo"/>
                <h1>{data.name}</h1>
                <p><i>{data.translate}</i></p>
            </div>
            <br />
            <p>{data.description}</p>
            <br />
            <div>
                <ul>
                    {
                        data.position.map(
                            (pos, index) => {
                                return <li key={index} className="position-list">
                                    <div>
                                        <h1 style={{fontSize: 20}}>{pos.role}</h1>
                                        <p>{pos.duration}</p>
                                        {
                                            pos.jobdesc.map(
                                                (job, index) =>{
                                                    return <li key={index} className="jobdesc">
                                                        {job}
                                                    </li>
                                                }
                                            )
                                        }
                                        <br/>
                                    </div>
                                </li>
                            }
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Organization;