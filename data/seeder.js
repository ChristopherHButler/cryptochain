const Wallet = require('../wallet/wallet');

const walletFoo = new Wallet();
const walletBar = new Wallet();

const generateWalletTransaction = ({ blockchain, transactionPool, wallet, recipient, amount }) => {
  const transaction = wallet.createTransaction({
    recipient, amount, chain: blockchain.chain
  });

  transactionPool.setTransaction(transaction);
};

const walletAction = (blockchain, transactionPool, wallet) => generateWalletTransaction({ blockchain, transactionPool, wallet, recipient: walletFoo.publicKey, amount: 5 });
const walletFooAction = (blockchain, transactionPool) => generateWalletTransaction({ blockchain, transactionPool, wallet: walletFoo, recipient: walletBar.publicKey, amount: 10 });
const walletBarAction = (blockchain, transactionPool, wallet) => generateWalletTransaction({ blockchain, transactionPool, wallet: walletBar, recipient: wallet.publicKey, amount: 15 });

exports.generateTransactions = ({ blockchain, transactionPool, wallet, transactionMiner }) => {
  for (let i = 0; i < 10; i++) {
    if (i % 3 === 0) {
      walletAction(blockchain, transactionPool, wallet);
      walletFooAction(blockchain, transactionPool);
    } else if (i % 3 === 1) {
      walletAction(blockchain, transactionPool, wallet);
      walletBarAction(blockchain, transactionPool, wallet);
    } else {
      walletFooAction(blockchain, transactionPool);
      walletBarAction(blockchain, transactionPool, wallet);
    }

    transactionMiner.mineTransactions();
  }
};
