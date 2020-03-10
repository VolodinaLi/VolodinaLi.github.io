import React from 'react';
import './Button.css';

class Button extends React.Component {	
  constructor(props){
  	super(props);
  	this.clickHandler=this.clickHandler.bind(this);
  };
  render(){
    return (
      <div className={this.props.className + " Button " + (this.props.shape=='square' ? 'Button-square' : 'Button-default')} onClick={this.clickHandler}> 
        {this.props.title || "Text"}
      </div>
      );
  };
  clickHandler(){
  	if (this.props.clickHandler)
  		this.props.clickHandler();
  }
};

export default Button;
