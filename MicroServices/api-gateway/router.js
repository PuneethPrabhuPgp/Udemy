const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const createError = require('http-errors');
const retry = require('retry');

const passport = require('./security');

const router = express.Router();

// setting retry http call options
const retryOptions = {
  retries: 3,
  factor: 2,
  minTimeout: 1000,
  maxTimeout: 10000,
  randomize: true
}

// creating proxies
const authProxy = createProxyMiddleware({
  target: 'http://localhost:3001',
  changeOrigin: true
});

const userProxy = createProxyMiddleware({
  target: 'http://localhost:3002',
  changeOrigin: true
});


const paymentProxy = createProxyMiddleware({
  target: 'http://localhost:3003',
  changeOrigin: true
});

const retryMiddleware = (req, res, next) => {
  const operation = retry.operation(retryOptions);

  operation.attempt(() => {
    // handling request to back-end
  });
}

router.get('/users', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
  // handle user management request
});

router.use('/auth', authProxy);
router.use('/users', userProxy);
router.use('/payments', paymentProxy);

router.get('/users', (req, res) => {

});

router.get('/auth', (req, res, next) => {
  try {

  }
  catch (err) {
    // using http error package to throw exception
    next(createError.Unauthorized('Invalid Crdentials'));
  }
});

router.get('/payments', (req, res, next) => {

});


module.exports = router;
