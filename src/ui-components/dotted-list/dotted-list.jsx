import './dotted-list.css';
import '../../Theme.css';

function DottedList({list}){
    return (
        <ul className="list-none h-fit z-5">
            {
                list.map(
                    (element, index) => {
                        return <li key={index} className='list-none'>
                            <div>
                                <div className='title-with-img'>
                                    {
                                        (element.org ?
                                        <img src= {element.org === 'kmk' ? '/assets/organization-logo/kmk-logo.png' :
                                                    element.org === 'himti' ? '/assets/organization-logo/himti-logo.jpg' :
                                                    '/assets/content-UI/college-icon.png'} className='org-logo-list'/>
                                            :
                                            <div />
                                        )
                                    }
                                    {
                                        (element.title && <h1 style={{fontSize: 25}}>{element.title}</h1>)
                                    }
                                </div>
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