import './dotted-list.css';

function DottedList({list}){
    return (
        <ul className="dotted-list">
            {
                list.map(
                    (element, index) => {
                        return <li key={index}>
                            <div>
                                {
                                    element.title ?
                                    <h1 style={{fontSize: 25}}>{element.title}</h1>
                                    :
                                    <div></div>
                                }
                                {
                                    element.content ? 
                                    <div className="inner-content">
                                        {element.content}
                                    </div>
                                    :
                                    <div></div>
                                }
                            </div>
                        </li>
                    }
                )
            }
        </ul>
    );
}

export default DottedList;