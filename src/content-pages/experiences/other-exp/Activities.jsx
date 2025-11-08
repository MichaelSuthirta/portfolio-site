import { ActivityList } from "../../../data-maps/ActivityList";
import DottedList from "../../../ui-components/dotted-list/dotted-list";

function Activities(){
    let activityList = ActivityList.map(
            (content, index) => (
                {
                    key: index,
                    title: content.name,
                    content: (
                        <div>
                            <h1 style={{fontSize: 20}}>{content.date}</h1>
                            <p>{content.desc}</p>
                        </div>
                    )
                }
            )
        )

    return(
        <DottedList list={activityList}/>
    );
}

export default Activities;