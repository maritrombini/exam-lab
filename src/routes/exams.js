const express = require('express')
const router = express.Router()
const controller = require('../controllers/examController')

router.post('/', controller.createExam)

router.get('/', controller.getAllExams)

router.get('/:id', controller.getExam)

router.get('/done/:done', controller.getDone)

router.get('/doctor/:doctor', controller.getByDoctor)

router.put('/:id', controller.updateExam)

router.patch('/:id/done', controller.updateDone)

router.delete('/:id', controller.deleteExam)

module.exports = router
