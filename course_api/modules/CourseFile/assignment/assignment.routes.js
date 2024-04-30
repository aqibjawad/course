const express = require('express')
const router = express.Router()
const courseassignmentController =   require('./assignment.controller');

const multer = require('multer');

const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      
      cb(null, 'assignment/');
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
      }
  });

const upload = multer({ storage: storage });

// Retrieve all employees
router.get('/', courseassignmentController.findAll);
 
router.get("/count", courseassignmentController.Count) 

// Create a new employee
router.post('/', upload.array('assignment'), courseassignmentController.create)

// Retrieve a single employee with id
router.get('/:id', courseassignmentController.findById);

// Update a employee with id
router.put('/:id', courseassignmentController.update);

// Delete a employee with id
router.delete('/delete/:id', courseassignmentController.delete);

module.exports = router
