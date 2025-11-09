import { Particles } from '../../components/ui/shadcn-io/particles';
import '../../Theme.css';

function DarkBG({children}){
    return(
        <div className='dark'>
            {children}
            <Particles 
            className='absolute inset-0 max-h-vh overflow-clip'
            quantity={180}
            ease={80}
            staticity={20}
            size={0.6}
            />
        </div>
    )
}

export default DarkBG;