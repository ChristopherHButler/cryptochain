const express = require('express');

const router = express.Router();

const apiController = require('../../controllers/v1/apiController');


// @desc:   Health Check
// @route:  GET /api/v1/ping
// @access: Public
router.get('/ping', apiController.ping);



// @desc:   Get the blcoks in the block chain
// @route:  GET /api/v1/blocks
// @access: Public
router.get('/blocks', apiController.getBlocks);



// @desc:   Add a block to the chain
// @route:  POST /api/v1/mine
// @access: Public
router.post('/mine', apiController.mineBlock);



// @desc:   Create a transaction
// @route:  GET /api/v1/mineTransactions
// @access: Public
router.get('/mineTransactions', apiController.mineTransactions);



// @desc:   Get the transaction pool map
// @route:  GET /api/v1/transactionPoolMap
// @access: Public
router.get('/transactionPoolMap', apiController.getTransactionPoolMap);



// @desc:   Create a transaction
// @route:  POST /api/v1/createTransaction
// @access: Public
router.post('/createTransaction', apiController.createTransaction);



// @desc:   Create a transaction
// @route:  GET /api/v1/mineTransactions
// @access: Public
router.get('/mineTransactions', apiController.mineTransactions);



// @desc:   Get wallet info
// @route:  GET /api/v1/walletInformation
// @access: Public
router.get('/walletInformation', apiController.walletInformation);


module.exports = router;