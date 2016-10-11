import React from 'react';
// import some from './some.js';
import style from './some.scss';

export default class App extends React.Component {
  render() {
    return (
      <div id="content">
        <h1>&nbsp;</h1>
        <h2>Welcome HOME!</h2>
        <ul className={style.title}>
          <li><a href="http://brunch.io">Brunch homepage</a></li>
          <li><a href="https://facebook.github.io/react/">React.js homepage</a></li>
        </ul>
      </div>
    );
  }
}
