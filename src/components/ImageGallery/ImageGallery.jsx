import PropTypes from 'prop-types';


import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"
import css from './ImageGallery.module.css';

export const ImageGallery = ({ img, onImageClick}) => {
    return(
        <ul className={css.gallery}>

        {img.map(({id, webformatURL, largeImageURL}) => {
            return (
         <ImageGalleryItem 
            key = {id} 
            webformatURL = {webformatURL}  
            largeImageURL = {largeImageURL}
            onImageClick={onImageClick}
             />
        )})}
        </ul>
    )}
    


    ImageGallery.propTypes = {
        img: PropTypes.arrayOf(PropTypes.object),
        onImageClick: PropTypes.func,
      };    