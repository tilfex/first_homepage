import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './header.css';
import './navbar.css';
import * as $ from 'jquery';

class Menu extends React.Component {
  render () {
    return (
      <div>
        <p>JSON</p>
      </div>
    )
  }
}

ReactDOM.render(
  <Menu />,
  document.getElementById('menu')
);

  $("#sell").on("click", function(){
    $("#menu").show();
  });
