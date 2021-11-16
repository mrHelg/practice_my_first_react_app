import React from 'react';
import { Link_func, Link_class } from './components/Link';

function App() {
  return (
    <>
      <Link_class href="https://learn.javascript.ru/" text="We learn JS" />
      <Link_func href="https://ru.reactjs.org/" text="We learn React" />
    </>
  );
}

export default App;
