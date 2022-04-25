import mongoose from 'mongoose'

const AtendimentosSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, require: true },
  email: { type: String, require: true },
  telefone: { type: Number, require: true },
  cidade: { type: String, require: true },
  estado: { type: String, require: true },
  data: { type: String, require: true },
  horário: { type: String, require: true }
})

const atendimentos = mongoose.model('atendimentos', AtendimentosSchema)

export default atendimentos
