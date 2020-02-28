import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'

class App extends Component {
  render() { 
    return ( 
      <div className='App'>
        <Image url={'https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg'} />
      </div>
     );
  }
}
 
export default App;
