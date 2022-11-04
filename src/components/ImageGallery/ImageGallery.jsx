import { Component } from 'react';
import './ImageGallery.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';

class ImageGallery extends Component {
  render() {
    const { images, status, error, modal, currentImg } = this.props.state;

    if (status === 'idle') {
      return;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }
    if (status === 'resolved') {
      return (
        <>
          <ul className="gallery">
            {images.map(img => (
              <ImageGalleryItem
                key={img.id}
                url={img.webformatURL}
                large={img.largeImageURL}
                alt={img.tags}
                onClick={this.props.onModal}
              />
            ))}
          </ul>
          <Button onLoadMore={this.props.onLoadMore} />
          {modal && <Modal onClose={this.props.onModal} img={currentImg} />}
        </>
      );
    }
  }
}
export default ImageGallery;
