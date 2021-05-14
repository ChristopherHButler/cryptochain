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


module.exports = router;