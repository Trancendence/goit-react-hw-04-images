import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';


export const ImageGalleryItem = ({ webformatURL, largeImageURL, onImageClick}) => {
    return (
        <li className={css.item}>
            <img src={webformatURL} alt="img from query"  onClick={() => onImageClick(largeImageURL)}  />
        </li>
    )
}



ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    onImageClick: PropTypes.func,
  };