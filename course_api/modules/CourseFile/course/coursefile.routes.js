const express = require('express')
const router = express.Router()
const coursefileController =   require('./coursefile.controller');

const multer = require('multer');

const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      
      cb(null, '../media/files');
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
      }
  });

const upload = multer({ storage: storage });

// Retrieve all employees
router.get('/', coursefileController.findAll);
 
router.get("/count", coursefileController.Count) 

// Create a new employee
router.post('/', upload.array('files'), coursefileController.create)

// Retrieve a single employee with id
router.get('/:id', coursefileController.findById);

router.get('/:id', coursefileController.findOld);

router.get('/:id', coursefileController.findComplete);

router.get('/:id', coursefileController.findCurrent);

// Update a employee with id
router.put('/:id', coursefileController.update);

// Delete a employee with id
router.delete('/delete/:id', coursefileController.delete);

module.exports = router