import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './header.css';
import './navbar.css';
import * as $ from 'jquery';

const data = require('./english_all.json');


class Menu extends React.Component {
  render() {
    return (
    <a id="closemenu"><img src="./images/closemenubut.png" alt="X"/></a>
    )
  }
}

ReactDOM.render(
  <Menu />,
  document.getElementById('menu')
);

$("#menubutton").on("click", function () {
  $('#menu').addClass('showmenu');
  $('#menubackground').fadeIn(250);
  $('#closemenu').fadeIn(150);
  $('body').addClass('body');
});

$('#closemenu').on("click", function () {
  $('#menu').removeClass('showmenu');
  $("#menubackground").fadeOut(250);
  $('#closemenu').hide();
  $('body').removeClass('body');
});
