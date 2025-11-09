import { OrganizationList } from "../../../data-maps/OrganizationList";
import DottedList from "../../../ui-components/dotted-list/dotted-list";
import './Organization.css';

function Organization({name}){
    let data = OrganizationList.find((organization) => organization.abbrev.toLowerCase() === name.toLowerCase());
    console.log(data);
    let orgInfo = data.position.map(
        (pos, index) => (
            {
                key: index,
                title: pos.role,
                content: (
                    <div>
                        <h1 style={{fontSize: 18}}>{pos.duration}</h1>
                        <br />
                        <ul>
                        {
                            pos.jobdesc.map(
                                (job, index) =>{
                                    return <li key={index} className="jobdesc">
                                        {job}
                                    </li>
                                }
                            )
                        }
                        </ul>
                        <br/>
                    </div>
                )
            }
        )
    )

    return(
        <div className="org-data-col">
            <div className="org-top-part">
                <img src={data.logo} className="org-logo"/>
                <h1>{data.name}</h1>
                <p className="org-desc"><i>{data.translate}</i></p>
            </div>
            {/* <br /> */}
            <p className="org-desc">{data.description}</p>
            <br />
            <div>
            <DottedList list={orgInfo} />
            </div>
        </div>
    )
}

export default Organization;