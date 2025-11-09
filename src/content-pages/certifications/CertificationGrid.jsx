import { Certificates_Activity } from '../../data-maps/Certificates-Activity';
import { Certificates_IT } from '../../data-maps/Certificates-IT';
import './CertGrid.css'
import '../../Theme.css';

function CertificationGrid({type}){
    var data;
    if (type.toLowerCase() === "it") {
        data = Certificates_IT;
    }
    else if(type.toLowerCase() === "college"){
        data = Certificates_Activity; //Will be changed later
    }

    return(
        <div className='certificates-list'>
            {data.map(
                (content) => {
                    return <a href={content.url} className='certificate-drive'>
                            <div key={content.id} className='certificate-container'>
                                <div className='image-container'>
                                    <img src={content.img} />
                                </div>
                                <h1>{content.name}</h1>
                                <hr />
                                <p>{content.date} | {content.publisher}</p>
                            </div>
                        </a>
                }
            )}
        </div>
    )
}

export default CertificationGrid;