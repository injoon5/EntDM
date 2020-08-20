import React from 'react';
import './Nav.scss';

const logout = () => {
  window.localStorage.removeItem('username');
  window.location.reload();
};

const Nav = (props: any) => {
  if (props.show) {
    return (
      <div className="nav">
        <h1>EntDM</h1>
        <h3>by BloKode</h3>
        <button className="logout" onClick={() => logout()}>
          로그아웃
        </button>
      </div>
    );
  } else {
    return (
      <div className="nav">
        <h1>EntDM</h1>
        <h3>by BloKode</h3>
      </div>
    );
  }
};

export default Nav;
