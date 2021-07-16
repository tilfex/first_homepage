import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './header.css';
import './navbar.css';
import * as $ from 'jquery';

const data = require('./english_all.json');


class SecondaryMenuItem extends React.Component {
  render() {
    let rows = [];
    if(this.props.data['contents']) {
      for (let i = 0; i < this.props.data['contents'].length; i++) {
        rows.push(<li key={i} >{this.props.data['contents'][i]['title']}</li>);
      }
    }
    return (
      <li>
        {this.props.data['title']}
        <ul>
          {rows}
        </ul>
      </li>
    )
  }
}

class MenuItem extends React.Component {
  render() {
    let rows = [];
    for (let i = 0; i < this.props.data['contents'].length; i++) {
      rows.push(<SecondaryMenuItem key={i} data={this.props.data['contents'][i]}/>);
    }
    return (
      <ul>
        <h1>{this.props.data['title']}</h1>
        {rows}
      </ul>
    )
  }
}

class Menu extends React.Component {
  render() {
    let rows = [];
    for (let i = 0; i < data.length; i++) {
      rows.push(<MenuItem key={i} data={data[i]}/>);
    }
    return <div>{rows}</div>;
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
});

$('#closemenu').on("click", function () {
  $('#menu').removeClass('showmenu');
  $("#menubackground").fadeOut(250);
  $('#closemenu').hide();
});
