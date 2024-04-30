const express = require('express')
const router = express.Router()
const coursequizController =   require('./quiz.controller');

const multer = require('multer');

const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      
      cb(null, '../media/quiz');
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
      }
  });

const upload = multer({ storage: storage });

// Retrieve all employees
router.get('/', coursequizController.findAll);
 
router.get("/count", coursequizController.Count) 

// Create a new employee
router.post('/', upload.array('quiz'), coursequizController.create)

// Retrieve a single employee with id
router.get('/:id', coursequizController.findById);

// Update a employee with id
router.put('/:id', coursequizController.update);

// Delete a employee with id
router.delete('/delete/:id', coursequizController.delete);

module.exports = router
