import React from 'react';
import './App.css';
import Button from './Components/Button';
import Menu from './Components/Menu';
import face from './resources/girlFace.svg'
import sensei from './resources/sensei.jpg'

class App extends React.Component {
  constructor(props){
    super(props);
    this.closeMenu=this.closeMenu.bind(this);
    this.showMenu=this.showMenu.bind(this);
    this.changePicture=this.changePicture.bind(this);
    const menuData=[
        {key: 1,title: "Шмот"},
        {key: 2,title: "Бонусы"},
        {key: 3,title: "Достижения"},
        {key: 4,title: "Чатик"},
        {key: 5,title: "Советы сенсея",clickHandler: this.changePicture}
        ];
    this.state={menuVisible: false, menuData: menuData, picture: face};

  }
  render() {
    return (
    <div className="Main">
      <Button className="MenuButton" title="Меню" clickHandler={this.showMenu} shape='square'/>
      <Menu data={this.state.menuData} visible={this.state.menuVisible} closeButtonHandler={this.closeMenu}/>
      <div className="Content">
        <img src={this.state.picture} className="FacePicture"/>
      </div>
    </div>
    );
  };
  showMenu() {
    this.setState({menuVisible: true});
  }
  closeMenu() {
    this.setState({menuVisible: false});
  }
  changePicture() {
    this.setState({picture: sensei})
  }
};

export default App;
