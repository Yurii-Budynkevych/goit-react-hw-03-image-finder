import { Component } from 'react';
import Notiflix from 'notiflix';
import './App.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    search: '',
  };

  onSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.search.value;
    if (searchValue.trim() === '') {
      return Notiflix.Notify.failure('Enter somthing');
    }
    this.setState({
      search: searchValue.toLowerCase(),
    });
    e.currentTarget.reset();
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery />
      </>
    );
  }
}
