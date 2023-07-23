import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
function Navbar() {
  const { loginWithRedirect } = useAuth0();
  let activeStyle = {
    fontWeight: 700,
  };
  let loginActive = {
    backgroundColor: 'black',
    fontWeight: 700,
    color: 'white',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  };
  let loginInActive = {
    backgroundColor: 'white',
    fontWeight: 500,
    color: 'black',
    padding: '1rem',
  };

  const userData = useSelector((state) => state.header.userDetails);
  console.log(userData);
  return (
    <div className="navbar-container w-full   flex justify-between bg-slate-50 p-4 items-center ">
      <div className="left-container text-2xl font-bold ">
        <div className="logo">Switch</div>
      </div>
      {userData.isLoggedIn ? (
        <div className="right-container  w-1/2">
          <ul className="list-container flex justify-around">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {' '}
              Home{' '}
            </NavLink>
            <NavLink
              to="/resume-builder"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {' '}
              Resume-Builder{' '}
            </NavLink>{' '}
            <NavLink
              to="/email-generator"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {' '}
              Email-generator{' '}
            </NavLink>{' '}
          </ul>
        </div>
      ) : (
        <div className="right-container  w-1/2">
          <ul className="list-container flex justify-around items-center">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {' '}
              Home{' '}
            </NavLink>
            <NavLink
              to="/resume-builder"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {' '}
              Resume-Builder{' '}
            </NavLink>{' '}
            <NavLink
              to="/email-generator"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {' '}
              Email-generator{' '}
            </NavLink>
            <div className="login-btn" onClick={() => loginWithRedirect()}>
              Login
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
