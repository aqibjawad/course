const express = require('express')
const router = express.Router()
const courseMidController =   require('./mid.controller');

const multer = require('multer');

const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      
      cb(null, '../media/mid');
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
      }
  });

const upload = multer({ storage: storage });

// Retrieve all employees
router.get('/', courseMidController.findAll);
 
router.get("/count", courseMidController.Count) 

// Create a new employee
router.post('/', upload.array('mid'), courseMidController.create)

// Retrieve a single employee with id
router.get('/:id', courseMidController.findById);

// Update a employee with id
router.put('/:id', courseMidController.update);

// Delete a employee with id
router.delete('/delete/:id', courseMidController.delete);

module.exports = router
