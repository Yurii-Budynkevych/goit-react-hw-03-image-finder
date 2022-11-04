import './Button.css';

const Button = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} className="button__load" type="button">
      Load more
    </button>
  );
};
export default Button;
