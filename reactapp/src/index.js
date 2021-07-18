import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './header.css';
import './navbar.css';
import * as $ from 'jquery';



class LoadLanguage extends React.Component {
  onClick(langdata) {
    switch(langdata){
      case "en": langdata = require('./english_all.json');
        break;
      case "de": langdata = require('./deutsch_alle.json');
        break;
      default: langdata = require('./english_all.json');
    }
    ReactDOM.render(
      <MainMenu data={langdata} />,
      document.getElementById('menu')
    );
  }
  render() {
    return(
      <form action="">
        <input onClick={()=> this.onClick('en')} type="radio" id="English" name="language" value="English"/>
        <label for="English">English</label><br/>
        <input onClick={()=> this.onClick('de')} type="radio" id="Deutsch" name="language" value="Deutsch"/>
        <label for="Deutsch">Deutsch</label><br/>
      </form>
    )
  }
}


/* data is return of method */







class MenuConnection extends React.Component {

  render() {
    let rows = []
    for (let item of this.props.lowestitems['contents']){
      rows.push(<div><a href=''>{item['title']}</a></div>)
    }
    return (
      <div>
        {rows}
      </div>
    )
  }
}

class LowestMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  onClick(item) {
    ReactDOM.render(
      <MenuConnection lowestitems={item} />,
      document.getElementById('secondmenu')
    );
    
    $('#menu').addClass('hidefirstmenu');
    $('#secondmenu').addClass('showsecmenu');
  }
  render() {
    if (this.props.minoritem['contents']) {
      return (
        <div>
          <a onClick={()=> this.onClick(this.props.minoritem)} className="menubutton">{this.props.minoritem['title']}</a>
        </div>
      )
    }
    return (
      <div>
        <a href='' >{this.props.minoritem['title']}</a>
      </div>
    )
  }
}

class MinorMenu extends React.Component {
  render() {
    let rows = []
    for (let item of this.props.mainitem['contents']) {
      rows.push(<LowestMenu minoritem={item} />)
    }
    return (
      <div>
        <h1>{this.props.mainitem['title']}</h1>
        {rows}
      </div>
    )
  }
}

class MainMenu extends React.Component {
  render() {
    let rows = []
    for (let item of this.props.data) {
      rows.push(<MinorMenu mainitem={item} />)
    }
    return (
      <div>
        <div>
          {rows}
        </div>
      </div>
    )
  }
}

const data = require('./english_all.json');
ReactDOM.render(
  <MainMenu data={data}/>,
  document.getElementById('menu')
);
ReactDOM.render(
  <LoadLanguage />,
  document.getElementById('languagedrop')
);



$("#menubutton").on("click", function () {
  $('#menubox').addClass('showmenu');
  $('#menubackground').fadeIn(250);
  $('#closemenu').fadeIn(150);
  $('body').addClass('body');
});

$('#closemenu').on("click", function () {
  $('#menubox').removeClass('showmenu');
  $("#menubackground").fadeOut(250);
  $('#closemenu').hide();
  $('body').removeClass('body');
});
$(".dropdlang").on("mouseenter", function () {
  $('#languagedrop').addClass('showlang');
});
$("#langdroparea").on("mouseleave", function () {
  $('#languagedrop').removeClass('showlang');
});
