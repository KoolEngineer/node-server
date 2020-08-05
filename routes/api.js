const express = require('express');
const router = express.Router();
const file = require('../middleware/file');

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

router.get('/', (req, res) => {
	result = file.processFile(res);
	//res.send(result);
});

module.exports = router;