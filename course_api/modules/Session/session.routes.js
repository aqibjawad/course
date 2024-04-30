const express = require('express')
const router = express.Router()
const sessionController =   require('./session.controller');

// Retrieve all employees
router.get('/', sessionController.findAll);

router.get("/count", sessionController.Count) 

// Create a new employee
router.post('/', sessionController.create);

// Retrieve a single employee with id
router.get('/:id', sessionController.findById);

// Update a employee with id
router.put('/:id', sessionController.update);

// Delete a employee with id
router.delete('/delete/:id', sessionController.delete);

module.exports = router
