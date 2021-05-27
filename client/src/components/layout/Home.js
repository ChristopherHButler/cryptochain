import React from 'react';

import { ROUTES } from '../../constants';
import { history } from '../../store/config';



const Home = () => {

  const renderHero = () => {
    return (
      <section className="section">
        <h1 className="title">Memecoin</h1>
        <h2 className="subtitle">This cryptocurrency is a joke, just like you.</h2>
      </section>
    );
  };

  const renderTiles = () => {
    return (
      <section className="section">
        <div className="tile is-ancestor">
          <div style={{ cursor: 'pointer' }} className="tile is-4 is-parent" onClick={() => history.push(ROUTES.WALLET)}>
            <article className="tile is-child box">
              <p className="title">Wallet</p>
              <p className="subtitle">Go to your wallet</p>
              <div className="content">
                <ul>
                  <li>View wallet details</li>
                  <li>Check your balance</li>
                  <li>Make a transaction.</li>
                </ul>
              </div>
            </article>
          </div>
          <div style={{ cursor: 'pointer' }} className="tile is-4 is-parent" onClick={() => history.push(ROUTES.TRANSACTIONS)}>
            <article className="tile is-child box">
              <p className="title">Transactions</p>
              <p className="subtitle">Go to Transactions</p>
              <div className="content">
                <p>View the blockchain transaction pool.</p>
              </div>
            </article>
          </div>
          <div style={{ cursor: 'pointer' }} className="tile is-4 is-parent" onClick={() => history.push(ROUTES.BLOCKCHAIN)}>
            <article className="tile is-child box">
              <p className="title">Blockchain</p>
              <p className="subtitle">View the blockchain</p>
              <div className="content">
                <p>Explore the blockchain in detail.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="columns is-centered">
      <div className="column is-half">
        {renderHero()}
        {renderTiles()}
      </div>
    </div>
  )
};

export default Home;
