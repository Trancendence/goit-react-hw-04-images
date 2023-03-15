import { getElement } from './Service/Api';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/button';
import { Loader } from './Loader/Loader';
import { useEffect } from 'react';
import { useState } from 'react';

export const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [largeImageURL, setLargeImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect( () => {
    if (!query){
      return
    }
        setIsLoading(true);
        getElement(query, page).then(({ hits, total, totalHits }) => {
          setImages(prevState => [...prevState, ...hits])
          setShowBtn(page < Math.ceil(totalHits / 12))
        }).catch(error => setError(error.message))
        .finally(() => setIsLoading(false))
  }, [query, page])
  
    const onFormSubmit = info => {
      setQuery(info);
      setPage(1);
      setImages([]);
      setError('');
    };
  
    const onImageClick = link => {
      setLargeImageURL(link)
    };
  
    const onButtonClick = () => {
      setPage(prevState => (
      prevState + 1
      ));
    };

    return (
      <>
        <Searchbar onFormSubmit={onFormSubmit} />
        {isLoading && ( <Loader /> )} 
        <ImageGallery
          img={images}
          onImageClick={onImageClick}
        />
        {showBtn && (
          <Button onButtonClick={onButtonClick} />
        )}
        {error && <p> {error} </p>}
        {largeImageURL.length > 0 && (
          <Modal
            largeImgUrl={largeImageURL}
            onImageClick={onImageClick}
          />
        )}
      </>
    );
}