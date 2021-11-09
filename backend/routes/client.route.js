const express = require('express');
const clientRoute = express.Router();

// Client model
let ClientModel = require('../models/Client');

clientRoute.route('/').get((req, res, next) => {
  ClientModel.find((error, data) => {
     if (error) {
       return next(error);
     } else {
       res.json(data);
     }
   });
 });

 clientRoute.route('/create-client/').post((req, res, ) => {
  ClientModel.create(req.body, (error, data,next ) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

clientRoute.route('/edit-client/:id').get((req, res) => {
  ClientModel.findOneAndReplace(req.params.id, (error, data, next) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update client
clientRoute.route('/update-client/:id').post((req, res, next) => {
  ClientModel.findOneAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
      console.log('Client successfully updated!');
    }
  });
});

// Delete client
clientRoute.route('/delete-client/:id').delete((req, res, next) => {
  ClientModel.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });
});

module.exports = clientRoute;