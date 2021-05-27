import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ROUTES } from '../../constants';
import { history } from '../../store/config';


const TransactionForm = ({  }) => {

  const [recipient, setRecipient] = useState('');
  const [currency, setCurrency] = useState();
  const [amount, setAmount] = useState(0);

  const [knownAddresses, setKnownAddresses] = useState([]);

  // console.log('known addresses: ', knownAddresses);

  useEffect(() => {
    axios.get(`${document.location.origin}/api/v1/knownAddresses`)
         .then((res) => {
          setKnownAddresses(res.data.data);
         })
         .catch((error) => {
           console.error('could not fetch known addresses: ', error.message);
         });
  }, []);

  const submitTransactionRequest = async () => {
    try {
      const response = await axios({
        method: 'POST',
        url: `${document.location.origin}/api/v1/createTransaction`,
        headers: {
          'Content-Type': ' application/json'
        },
        data: {
          recipient,
          amount,
        }
      });

      // console.log('response: ', response);
      history.push(ROUTES.TRANSACTIONS)
    } catch (error) {
      console.error('Error making transaction: ', error.message)
    }
  };

  return (
    <div>
      <div className="block">
        <h5 className="title is-5">Send some memecoin to a friend</h5>
      </div>
      <div className="tile is-parent is-8">
        <article className="tile is-child box">
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Recipient" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field has-addons">
            <p className="control">
              <span className="select">
                <select>
                  <option>₿</option>
                  <option>$</option>
                  <option>£</option>
                  <option>€</option>
                </select>
              </span>
            </p>
            <p className="control">
              <input className="input" type="text" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </p>
            <p className="control">
              <a className="button" onClick={submitTransactionRequest}>
                Transfer
              </a>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};


export default TransactionForm;
