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
        <a id="closemenu"><img src="./images/closemenubut.png" alt="X" /></a>
      </div>
    )
  }
}

ReactDOM.render(
  <Menu />,
  document.getElementById('menu')
);

$("#menubutton").on("click", function(){
  $("#menu").show();
  $("#menubackground").show();
  $('#closemenu').show();
});

$('#closemenu').on("click", function(){
  $("#menu").hide();
  $("#menubackground").hide();
  $('#closemenu').hide();
});
