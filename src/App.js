import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  // Option1: JSX
  return (
    <a class="link" href="https://learn.javascript.ru/">
      We learn JS
    </a>
  );

  // Option2: createElement
  // return React.createElement(
  //   'a',
  //   { className: 'link', href: 'https://learn.javascript.ru/' },
  //   'We learn JS'
  // );
}

export default App;
