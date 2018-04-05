import React from 'react'; 
import classes from './Footer.css';
import Logo from '../../LogoFooter/Logo';

const footer = (props) => (
    <footer className={classes.footer}>
      <p>The University of Texas at Dallas</p>
      <div className={classes.Logo}>
        <Logo />
      </div>
    </footer>
);

export default footer; 