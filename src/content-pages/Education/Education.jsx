import DottedList from "../../ui-components/dotted-list/dotted-list";

function Education(){
    const educationList = [
        {
            name: "BINUS University",
            year: "2023-now",
            major: "Computer Science",
            grade: 3.87
        },
        {
            name: "Santa Angela Highschool, Bandung",
            year: "2020-2023",
            major: "Science Program",
            grade: 91.96
        }
    ]

    let educList = educationList.map(
        (content, index) => (
            {
                key: index,
                title: content.name,
                content: (
                    <div>
                        <h1 style={{fontSize: 18}}>{content.major} | Latest Grade: {content.grade}</h1>
                        <p>{content.year}</p>
                    </div>
                )
            }
        )
    )

    return (
        <div className="light">
            <h1>Education</h1>
            <hr />
            <DottedList list={educList} />
        </div>
    );
}

export default Education;