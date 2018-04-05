import React from 'react'; 

import editorLogo from '../../assets/images/cloud.png'; 
import classes from './Logo.css'; 

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={editorLogo} alt='Logo'/>
    </div>
)

export default logo; 