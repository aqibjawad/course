const express = require('express')
const router = express.Router()
const coursefinalController =   require('./final.controller');

const multer = require('multer');

const path = require('path')

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
      
      cb(null, '../media/final');
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
      }
  });

const upload = multer({ storage: storage });

// Retrieve all employees
router.get('/', coursefinalController.findAll);
 
router.get("/count", coursefinalController.Count) 

// Create a new employee
router.post('/', upload.array('final'), coursefinalController.create)

// Retrieve a single employee with id
router.get('/:id', coursefinalController.findById);

// Update a employee with id
router.put('/:id', coursefinalController.update);

// Delete a employee with id
router.delete('/delete/:id', coursefinalController.delete);

module.exports = router
