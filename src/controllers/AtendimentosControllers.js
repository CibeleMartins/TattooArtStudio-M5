import atendimentos from '../models/AtendimentosModels.js'

class AtendimentosController {
  static getAtendimentos = (req, res) => {
    atendimentos.find((e, atendimentos) => {
      if (e) {
        res.status(500).send({ message: `${e.message} - Fail search ` })
      } else {
        res.status(200).json(atendimentos)
      }
    })
  }

  static postAtendimentos = (req, res) => {
    const cadastroAtendimento = new atendimentos(req.body)
    cadastroAtendimento.save(cadastroAtendimento, e => {
      if (e) {
        res.status(500).send({ message: `${e.message} - Fail to post` })
      } else {
        res.status(200).json(cadastroAtendimento)
      }
    })
  }

  static updateAtendimentos = (req, res) => {
    const id = req.params.id
    atendimentos.findByIdAndUpdate(id, { $set: req.body }, e => {
      if (e) {
        res.status(500).send({ message: `${e.message} - Fail to update` })
      } else {
        res.status(200).json(atendimentos)
      }
    })
  }
  static deleteAtendimentos = (req, res) => {
    const id = req.params.id
    atendimentos.findByIdAndDelete(id, e => {
      if (e) {
        res
          .status(500)
          .send({ message: `${e.message} - Fail to delete Atendimento` })
      } else {
        res.status(200).json()
      }
    })
  }
}

export default AtendimentosController
