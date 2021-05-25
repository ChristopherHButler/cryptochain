
const asyncHandler = require('../../middleware/async');
const Wallet = require('../../wallet/wallet');

const {
  blockchain,
  pubsub,
  transactionPool,
  wallet,
  transactionMiner,
} = require('../../index');







// @desc:   Ping
// @route:  GET /api/v1/ping
// @access: Public
exports.ping = (req, res) => res.status(200).send({ status: 'success', msg: 'Cryptochain Server Online' });



// @desc:   Get all blocks in blockchain
// @route:  GET /api/v1/blocks
// @access: Public
exports.getBlockchain = asyncHandler(async (req, res, next) => {
  res.json({ status: 'success', data: blockchain.chain });
});



// @desc:   Add a block to the chain
// @route:  POST /api/v1/mine
// @access: Public
exports.mineBlock = asyncHandler(async (req, res, next) => {
  const { data } = req.body;
  
  blockchain.addBlock({ data });

  pubsub.broadcastChain();

  res.redirect('/api/v1/blocks');
});



// @desc:   Create a transaction
// @route:  GET /api/v1/mineTransactions
// @access: Public
exports.mineTransactions = asyncHandler(async (req, res, next) => {
  transactionMiner.mineTransactions();

  res.redirect('/api/v1/blocks');
});


// @desc:   Get the transaction pool map
// @route:  GET /api/v1/transactionPoolMap
// @access: Public
exports.getTransactionPoolMap = asyncHandler(async (req, res, next) => {
  res.json({ status: 'success', data: transactionPool.transactionMap });
});



// @desc:   Create a transaction
// @route:  POST /api/v1/createTransaction
// @access: Public
exports.createTransaction = asyncHandler(async (req, res, next) => {
  const { amount, recipient } = req.body;
  
  let transaction = transactionPool.existingTransaction({ inputAddress: wallet.publicKey });

  try {
    if (transaction) {
      transaction.update({ senderWallet: wallet, recipient, amount });
    } else {
      transaction = wallet.createTransaction({ recipient, amount, chain: blockchain.chain });
    }
  } catch (error) {
    return res.status(400).json({ status: 'error', message: error.message });
  }

  transactionPool.setTransaction(transaction);

  pubsub.broadcastTransaction(transaction);

  res.json({ status: 'success', data: transaction });

});



// @desc:   Get wallet info
// @route:  GET /api/v1/walletInformation
// @access: Public
exports.walletInformation = asyncHandler(async (req, res, next) => {

  res.json({
    status: 'success',
    data: {
      address: wallet.publicKey,
      balance: Wallet.calculateBalance({ chain: blockchain.chain, address: wallet.publicKey }),
    },
  });
});
