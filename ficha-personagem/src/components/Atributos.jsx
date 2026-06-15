import Section from './Section.jsx'
import NumericField from './NumericField.jsx'

const MAX_ATRIBUTO = 6
const TOTAL_INICIAL = 6

export default function Atributos({ atributos, onChange }) {
  const total = atributos.fisico + atributos.mente
  const disponiveis = TOTAL_INICIAL - total
  const badge = `${disponiveis} pts`
  const badgeVariant = disponiveis < 0 ? 'warn' : disponiveis === 0 ? 'ok' : undefined

  return (
    <Section
      title="Atributos"
      icon="💪"
      badge={badge}
      badgeVariant={badgeVariant}
      defaultOpen
    >
      <div className="atributos-grid">
        <div className="atributo-card">
          <div className="atributo-label">Físico (Corpo)</div>
          <NumericField
            value={atributos.fisico}
            max={MAX_ATRIBUTO}
            onChange={v => onChange('fisico', v)}
          />
          <div style={{ fontSize: '10px', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.4 }}>
            Defesa física<br />Recuperação · Iniciativa
          </div>
        </div>

        <div className="atributo-card">
          <div className="atributo-label">Mente</div>
          <NumericField
            value={atributos.mente}
            max={MAX_ATRIBUTO}
            onChange={v => onChange('mente', v)}
          />
          <div style={{ fontSize: '10px', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.4 }}>
            Defesa mental<br />Iniciativa mental
          </div>
        </div>
      </div>

      <div className="pontos-info">
        Pontos distribuídos: <span>{total}</span> / {TOTAL_INICIAL}
        {disponiveis < 0 && (
          <span style={{ color: 'var(--red)', marginLeft: 6 }}>({Math.abs(disponiveis)} acima do inicial — use XP)</span>
        )}
      </div>
    </Section>
  )
}
