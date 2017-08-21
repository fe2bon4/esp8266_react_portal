import React, { Component } from 'react'
import Avatar from 'react-md/lib/Avatars'
import FontIcon from 'react-md/lib/FontIcons'
import ListItem from 'react-md/lib/Lists/ListItem'
import NavigationDrawer  from 'react-md/lib/NavigationDrawers';
import NavigationItem from '../components/NavigationItem.jsx'

class App extends Component {
  constructor(){
    super();
    this.state = {
      navbarTitle: "Home",
      navItemInformation: [
        {
          path:"/",
          primaryText:"Home",
          fontIcon:"home"
        },
        {
          path:"/wifi",
          primaryText:"WiFi",
          fontIcon:"wifi"
        },
        {
          path:"/settings",
          primaryText:"Settings",
          fontIcon:"settings"
        },
        {
          path:"/gpio",
          primaryText:"GPIO",
          fontIcon:"settings_input_component"
        }
      ]
    }
  }

  onNavigationClick(title){
    this.setState({navbarTitle:title})
  }
	render(){

    const navItems = this.state.navItemInformation.map( (item, i)=>{
      return (
        <NavigationItem 
          key={i}
          {...item}
          onClick={this.onNavigationClick.bind(this,item.primaryText)}
        />
      )
    })
		return (
        <NavigationDrawer
          drawerTitle="Node MCU"
          toolbarTitle={this.state.navbarTitle}
          navItems={navItems}
        >
        {this.props.children}
        </NavigationDrawer>
			); 
	}
}

export default App;