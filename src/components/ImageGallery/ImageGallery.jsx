import { Component } from 'react';
import './ImageGallery.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';

const KEY = '30371799-820dc93a3ae10a20aac07ac2b';
const BASE_URL = 'https://pixabay.com/api/';

class ImageGallery extends Component {
  state = {
    images: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.search !== this.props.search) {
      this.setState({ status: 'pending' });

      fetch(
        `${BASE_URL}?q=${this.props.search}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw new Error(`Error, please try again later`);
        })
        .then(res => this.setState({ images: res.hits, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  };

  render() {
    const { images } = this.state;
    const { status } = this.state;
    const { error } = this.state;

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
        <ul className="gallery">
          {images.map(img => (
            <ImageGalleryItem
              key={img.id}
              url={img.webformatURL}
              alt={img.tags}
            />
          ))}
        </ul>
      );
    }
  }
}
export default ImageGallery;
