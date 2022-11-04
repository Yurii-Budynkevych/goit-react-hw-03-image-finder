import './ImageGalleryItem.css';

const ImageGalleryItem = ({ url, alt }) => {
  return (
    <li className="gallery-item">
      <img className="image" src={url} alt={alt} />
    </li>
  );
};
export default ImageGalleryItem;
