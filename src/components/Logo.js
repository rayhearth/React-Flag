import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
            {/* les images impotées dps la balise im st accessibles ds public */}
            <img src="./logo192.png" alt="logo react" />
            <h3>React World</h3>
        </div>
    );
};

export default Logo;