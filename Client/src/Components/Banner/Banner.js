import React from 'react';

const Header = () => {
    return (
        <div className="header ">
            {/* <div className="headerTitles">
                <span className="headerTitleSm">Read articles on your choice!</span>
                <span className="headerTitleLg">BLOG</span>
            </div> */}
            <img
                className="headerImg w-100"
                src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
            />
        </div>
    );
};

export default Header;