const express = require('express')
const router = express.Router()
const semesterController =   require('./semester.controller');

// Retrieve all employees
router.get('/', semesterController.findAll);

router.get("/count", semesterController.Count) 

// Create a new employee
router.post('/', semesterController.create);

// Retrieve a single employee with id
router.get('/:id', semesterController.findById);

// Update a employee with id
router.put('/:id', semesterController.update);

// Delete a employee with id
router.delete('/delete/:id', semesterController.delete);

module.exports = router
