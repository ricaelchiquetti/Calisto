import { TrendingUp } from 'lucide-react'
import Section from './Section.jsx'
import NumericField from './NumericField.jsx'

const TABELA = [
  { item: '1 pt em Perícia',        custo: '6 XP' },
  { item: '1 pt em Atributo',       custo: '12 XP' },
  { item: '1 pt de Vida ou Sorte',  custo: '1 XP' },
  { item: '1 pt em Característica', custo: '8 XP' },
]

export default function Experiencia({ experiencia, onChange }) {
  const disponivel = Math.max(0, experiencia.total - experiencia.gasto)

  return (
    <Section title="Experiência" icon={<TrendingUp size={13} />} defaultOpen>
      <div className="xp-boxes">
        <div className="xp-box">
          <div className="xp-box__label">Total</div>
          <div className="xp-box__value">{experiencia.total}</div>
          <NumericField value={experiencia.total} max={999} onChange={v => onChange('total', v)} />
        </div>

        <div className="xp-box">
          <div className="xp-box__label">Gasto</div>
          <div className="xp-box__value">{experiencia.gasto}</div>
          <NumericField value={experiencia.gasto} max={experiencia.total} onChange={v => onChange('gasto', v)} />
        </div>

        <div className="xp-box xp-box--disponivel">
          <div className="xp-box__label">Disponível</div>
          <div className="xp-box__value">{disponivel}</div>
          <div style={{ fontSize: 9, color: 'var(--text-muted)' }}>automático</div>
        </div>
      </div>

      <div className="xp-table-title">Custo de evolução</div>
      <div className="xp-table">
        {TABELA.map(row => (
          <div className="xp-row" key={row.item}>
            <span className="xp-row__item">{row.item}</span>
            <span className="xp-row__custo">{row.custo}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
