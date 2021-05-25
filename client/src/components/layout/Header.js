import React from 'react';


import { ROUTES } from '../../constants';
import { history } from '../../store/config';



const Header = () => {
  return (
    <div className="navbar is-dark">
      <div className="navbar-brand">
        <div className="navbar-item" onClick={() => history.push(ROUTES.HOME)}>
          <h1 style={{ fontSize: '20px', marginLeft: '40px', cursor: 'pointer' }}>Cryptochain</h1>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" onClick={() => history.push(ROUTES.WALLET)}>
            Wallet
          </a>
          <a className="navbar-item" onClick={() => history.push(ROUTES.TRANSACTIONS)}>
            Transactions
          </a>
          <a className="navbar-item" onClick={() => history.push(ROUTES.BLOCKCHAIN)}>
            Blockchain
          </a>
        </div>
      </div>
      <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item" style={{ paddingRight: '25px' }}>
              <h1 style={{ fontSize: '16px', margin: '0 10px 0 0' }}><span className="subtitle is-6">App by</span><span style={{ marginLeft: '8px' }}>Christopher Butler</span></h1>
              <a style={{ marginRight: '15px', textDecoration: 'none' }} className="button is-primary is-small" href="https://www.linkedin.com/in/christopherharoldbutler/" rel="noreferrer" target="_blank">
                <span className="icon is-small">
                  <i className="fab fa-linkedin"></i>
                </span>
                <span>LinkedIn</span>
              </a>
              <a style={{ textDecoration: 'none' }} className="button is-small" href="https://github.com/ChristopherHButler" rel="noreferrer" target="_blank">
                <span className="icon is-small">
                  <i className="fab fa-github"></i>
                </span>
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Header;
