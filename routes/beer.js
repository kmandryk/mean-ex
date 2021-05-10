var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Beer = require('../models/Beer.js');

/* GET ALL BOOKS */
router.get('/', function (req, res, next) {
  Beer.find(function (err, products) {
    const { type, style, location } = req.query;
    console.log('type: ' + type);

    console.log('products: ' + products);
    if (err) return next(err);
    if (type) { 
      products = products.filter(b => b.type === type); 
      console.log('filterd');
    }
    console.log('filtered products: ' + products);
    if (style) { 
      products = products.filter(b => b.style === style); 
    }
    console.log('filtered products: ' + products);
    if (location) { 
      products = products.filter(b => b.location === location); 
    }
    console.log('filtered products: ' + products);
    res.json(products);
  });
});

router.get('/type', function (req, res, next) {
  Beer.find().distinct('type',function (err, products) {
    console.log('filtered products: ' + products);
    res.json(products);
  });
});

router.get('/style', function (req, res, next) {
  Beer.find().distinct('style',function (err, products) {
    console.log('filtered products: ' + products);
    res.json(products);
  });
});

router.get('/location', function (req, res, next) {
  Beer.find().distinct('location',function (err, products) {
    console.log('filtered products: ' + products);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function (req, res, next) {
  Beer.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/', function (req, res, next) {
  Beer.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function (req, res, next) {
  Beer.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function (req, res, next) {
  Beer.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
