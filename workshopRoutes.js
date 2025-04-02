const express = require('express');
const router = express.Router();

const workshopController = require('../Controllers/workshopController');


router.get('/', workshopController.getAllWorkshops);
router.post('/', workshopController.addWorkshops);
router.get('/:id', workshopController.getById);
router.put('/:id', workshopController.updateWorkshop);
router.delete('/:id', workshopController.deleteWorkshop);


module.exports = router;