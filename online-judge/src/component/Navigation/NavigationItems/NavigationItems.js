import React from 'react'; 

import NavigationItem from './NavigationItem/NavigationItem'; 

import classes from './NavigationItems.css'; 

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem>Problems</NavigationItem>
        <NavigationItem>Log in</NavigationItem>
    </ul>
); 

export default navigationItems; 