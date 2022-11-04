import './ImageGalleryItem.css';

const ImageGalleryItem = ({ url, large, alt, onClick }) => {
  return (
    <li onClick={() => onClick(large, alt)} className="gallery-item">
      <img className="image" src={url} alt={alt} />
    </li>
  );
};
export default ImageGalleryItem;
