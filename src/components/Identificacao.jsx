import { User } from 'lucide-react'
import Section from './Section.jsx'

export default function Identificacao({ data, onChange }) {
  return (
    <Section title="Identificação" icon={<User size={13} />}>
      <div className="field-group">
        <label className="field-label">Nome</label>
        <input
          className="field-input"
          value={data.nome}
          onChange={e => onChange('nome', e.target.value)}
          placeholder="Nome do sobrevivente"
        />
      </div>

      <div className="field-group">
        <label className="field-label">Ocupação (pré-apocalipse)</label>
        <input
          className="field-input"
          value={data.ocupacao}
          onChange={e => onChange('ocupacao', e.target.value)}
          placeholder="Ex: Policial, Médico, Mecânico..."
        />
      </div>

      <div className="field-group">
        <label className="field-label">Descrição física</label>
        <input
          className="field-input"
          value={data.descricao}
          onChange={e => onChange('descricao', e.target.value)}
          placeholder="Aparência, idade, traços marcantes..."
        />
      </div>

      <div className="field-group">
        <label className="field-label">Histórico</label>
        <textarea
          className="field-textarea"
          value={data.historico}
          onChange={e => onChange('historico', e.target.value)}
          placeholder="Quem era você antes do mundo acabar?"
        />
      </div>
    </Section>
  )
}
