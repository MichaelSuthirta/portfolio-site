import '../../Theme.css';
import { BackgroundPaths } from '@/components/ui/shadcn-io/background-paths';
import { Particles } from '../../components/ui/shadcn-io/particles';

function LightBG({children}){
    return(
        <div className='light'>
            <BackgroundPaths />
            {children}
            <Particles 
                        className='absolute inset-0 max-h-vh overflow-clip'
                        quantity={180}
                        ease={80}
                        staticity={20}
                        size={1}
                        color='#545151ff'
            />
        </div>
    )
}

export default LightBG;