import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <h4 className='logo'>
          <i className='fab fa-github'></i>
          <p>GithubFinder</p>
        </h4>
        <ul>
          <li>
            <a href='#!'>Home</a>
          </li>
          <li>
            <a href='#!'>About</a>
          </li>

          <li>
            <a href='#!'>
              <i className='fas fa-cog'></i>
            </a>
          </li>
          <li>
            <a href='#!'>
              <i className='fas fa-envelope'>
                <div className='msg-notification'>
                  4
                </div>
              </i>
            </a>
          </li>
          <li>
            <a href='#!'>
              <i className='fas fa-bell'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
