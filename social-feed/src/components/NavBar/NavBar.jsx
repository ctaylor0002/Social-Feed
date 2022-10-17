import React from 'react';

const NavBar = (props) => {
    return ( 
        // This will create the basic Navigation Bar for this site
        // It will need its own css file attached to it
        <div className='nav-bar'>
            <h1>Social<small className='text-muted'>Feed</small></h1>
        </div>
     );
}
 
export default NavBar;