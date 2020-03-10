import React from 'react';
import './Menu.css';
import Button from './Button';

class Menu extends React.Component {	
  constructor(props){
  	super(props);
  };
  render(){
    if (this.props.visible) {
      const data=this.props.data;
      return (
        <div className="Menu"> 
          <Button title="X" shape='square' clickHandler={this.props.closeButtonHandler}/>
          <div>
            {this.props.data.map((data) =>
              <Button key={data.key}
                      title={data.title}
                      clickHandler={data.clickHandler}/>
              )}
          </div>
        </div>
      );
    }
    else {
      return null;
    }
  }
};

export default Menu;
