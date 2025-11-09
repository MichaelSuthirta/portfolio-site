import '../../Theme.css';
import { BackgroundPaths } from '@/components/ui/shadcn-io/background-paths';

function LightBG({children}){
    return(
        <div className='light'>
            <BackgroundPaths />
            {children}
        </div>
    )
}

export default LightBG;