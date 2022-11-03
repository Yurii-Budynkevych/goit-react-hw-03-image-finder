import { Component } from 'react';
import './ImageGallery.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    search: '',
  };
  render() {
    return (
      <ul className="gallery">
        <ImageGalleryItem />
      </ul>
    );
  }
}
export default ImageGallery;
