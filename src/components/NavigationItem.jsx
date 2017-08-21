import React, { Component } from 'react'
import { Link } from 'react-router'
import Avatar from 'react-md/lib/Avatars'
import FontIcon from 'react-md/lib/FontIcons'
import ListItem from 'react-md/lib/Lists/ListItem'



export default class NavigationItem extends Component {
    render(){

      const { path, primaryText, fontIcon, onClick } = this.props 

      return ( 
        <Link to={path} onClick={onClick}>
          <ListItem
          primaryText={primaryText}
          leftAvatar={(<Avatar icon={<FontIcon>{fontIcon}</FontIcon>} />)}
          />
        </Link>)
    }
}