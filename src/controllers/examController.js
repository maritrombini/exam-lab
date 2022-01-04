const Exam = require('../models/Exam')

const createExam = async (req, res) => {
  const { name, doctor, specialty, clinic, expected_date, done } = req.body
  try {
    const exam = await Exam.create({
      name,
      doctor,
      specialty,
      clinic,
      expected_date,
      done
    })
    console.log(`Seu exame ${exam.name} foi cadastrado com sucesso!`)
    res.status(201).send(exam)
  } catch (error) {
    messageError(res, error)
  }
}

const messageError = (res, error) => {
  res.status(500).send({ message: error.message })
}

const getAllExams = async (req, res) => {
  const done = req.query.done
  try {
    const where = done ? { where: { done } } : {}
    const exams = await Exam.findAll({
      where,
      order: [['id', 'ASC']]
    })

    if (exams && exams.length > 0) {
      res.status(200).send(exams)
    } else {
      res.status(204).send()
    }
  } catch (error) {
    messageError(res, error)
  }
}

const getExam = async (req, res) => {
  const examId = req.params.id

  try {
    const exam = await Exam.findOne({
      where: { id: examId }
    })
    if (exam) {
      res.status(200).send(exam)
    } else {
      res.status(404).send({
        message: `Exame de ID ${examId} não foi localizado na Base de Dados.`
      })
    }
  } catch (error) {
    messageError(res, error)
  }
}

const getByDoctor = async (req, res) => {
  const examDoctor = req.params.doctor
  try {
    const doctor = await Exam.findOne({
      where: { doctor: examDoctor }
    })
    if (doctor) {
      res.status(200).send(doctor)
    } else {
      res.status(404).send({
        message: `Doutor(a) ${examDoctor} não foi localizado(a) na Base de Dados.`
      })
    }
  } catch (error) {
    messageError(res, error)
  }
}

const getDone = async (req, res) => {
  const examDone = req.params.done
  try {
    const done = await Exam.findAll({
      where: { done: true }
    })
    if (done) {
      res.status(200).send(done)
    } else {
      res.status(404).send({
        message: `Exame ${examDone} não foi localizado(a) na Base de Dados.`
      })
    }
  } catch (error) {
    messageError(res, error)
  }
}

const updateExam = async (req, res) => {
  const examId = req.params.id
  const { name, doctor, specialty, clinic, expected_date, done } = req.body
  try {
    const rowsUpdated = await Exam.update(
      { name, doctor, specialty, clinic, expected_date, done },
      {
        where: { id: examId }
      }
    )
    if (rowsUpdated && rowsUpdated[0] > 0) {
      res.status(200).send({ message: `Registro alterado com sucesso!` })
    } else {
      res.status(404).send({ message: 'Exame não localizado para alteração.' })
    }
  } catch (error) {
    messageError(res, error)
  }
}

const updateDone = async (req, res) => {
  const examId = req.params.id
  const done = req.body.done
  try {
    const updatedRows = await Exam.update({ done }, { where: { id: examId } })
    if (updatedRows && updatedRows[0] > 0) {
      res.status(200).send({
        message: `${updatedRows[0]} exame foi atualizado com sucesso!`
      })
    } else {
      res.status(404).send({
        message: `Exame com o ID ${examId} não localizado na Base de Dados.`
      })
    }
  } catch (error) {
    messageError(res, error)
  }
}

const deleteExam = async (req, res) => {
  const examId = req.params.id
  try {
    const rowDeleted = await Exam.destroy({ where: { id: examId } })
    if (rowDeleted) {
      res
        .status(200)
        .send({ message: `${rowDeleted} exame deletado com sucesso!` })
    } else {
      res.status(404).send({
        message: `Exame com o Id ${examId} não foi localizado na Base de Dados.`
      })
    }
  } catch (error) {
    messageError(res, error)
  }
}

module.exports = {
  createExam,
  getAllExams,
  getExam,
  getDone,
  getByDoctor,
  updateExam,
  updateDone,
  deleteExam
}
//  getDone,
