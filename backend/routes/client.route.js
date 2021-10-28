const express = require('express');
const clientRoute = express.Router();

// Student model
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

 clientRoute.route('/create-student').post((req, res, next) => {
    ClientModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

clientRoute.route('/edit-student/:id').get((req, res, next) => {
    ClientModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update student
clientRoute.route('/update-student/:id').post((req, res, next) => {
    ClientModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
      console.log('Student successfully updated!');
    }
  });
});

// Delete student
clientRoute.route('/delete-student/:id').delete((req, res, next) => {
    ClientModel.findByIdAndRemove(req.params.id, (error, data) => {
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