import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor() {
    super();
    this.state = {
      fontColor: 'green',
      fontSize: 12,
      fontFamily: 'arial',
      allowEdit: true,
    }

    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateEditStatus = this.updateEditStatus.bind(this);

  }
  // updateColor
  updateColor = (val) => {this.setState({ fontColor : val });}
  
  // updateSize
  updateSize = (val) => {this.setState({ fontSize : parseInt(val,10) });}
  
  // updateFamily
  updateFamily = (val) => {this.setState({ fontFamily : val });}
  
  // updateEditStatus
  updateEditStatus = (val) => {this.setState({ allowEdit : val ==='true' });}

  render() {
    const {fontSize, fontFamily, fontColor, allowEdit} = this.state;
    return (
      <div>
        <div className="headerBar">
          <EditToggle 
            update={this.updateEditStatus}
            edit={allowEdit} />
          <ColorChanger 
            fontColor={fontColor}
            update={this.updateColor} 
            allowEdit={allowEdit} />
          <SizeChanger
            fontSize={this.fontSize} 
            update={this.updateSize}
            allowEdit={allowEdit} />
          <FamilyChanger
            fontFamily={fontFamily} 
            update={ this.updateFamily } 
            allowEdit={allowEdit} />
        </div>
        <div className="textArea">
          <TextContainer 
            fontColor={fontColor}
            fontFamily={fontFamily}
            fontSize={fontSize}/>
        </div>
      </div>
    )
  }
}

export default App;
