import { PhotoList } from '@/data-maps/PhotoList';
import '../../../Theme.css';
import DarkBG from '@/ui-components/themes/DarkBG';
import { MasonryPhotoAlbum, ColumnsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import 'react-photo-album/columns.css';
import WhiteUpArrow from '@/ui-components/arrow-scroll/WhiteUpArrow';

function PhotoGallery(){
    const photos = PhotoList.map(
        (photo) => {
            let img = new Image();
            img.src = photo.src;
            return {
                index: photo.id,
                src: photo.src,
                title: photo.title,
                width: img.width/4,
                height: img.height/4
            }
        }
    );

    return(
        <DarkBG>
            <WhiteUpArrow />
            <h1>Gallery</h1>
            <hr />
            <br/>
            <div className='w-100'>
                <MasonryPhotoAlbum photos={photos}  columns={3} />
            </div>
        </DarkBG>
    );
}

export default PhotoGallery;