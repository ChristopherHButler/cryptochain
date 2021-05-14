
const asyncHandler = require('../../middleware/async');

const { blockchain, pubsub } = require('../../index');






// @desc:   Ping
// @route:  GET /api/v1/ping
// @access: Public
exports.ping = (req, res) => res.status(200).send({ status: 200, msg: 'Cryptochain Server Online' });



// @desc:   Get all blocks in blockchain
// @route:  GET /api/v1/blocks
// @access: Public
exports.getBlocks = asyncHandler(async (req, res, next) => {
  res.json({ data: blockchain.chain });
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