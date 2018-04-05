import React from 'react'; 
import classes from './Logo.css';
import editorLogo from '../../assets/images/UTDallas.jpg'; 

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={editorLogo} alt='Logo'/>
    </div>
);

export default logo; 