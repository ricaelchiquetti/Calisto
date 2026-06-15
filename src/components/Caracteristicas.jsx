import { useState } from 'react'
import Section from './Section.jsx'

const NEEDS_DETAIL = ['Especialista']

function AddCaract({ onAdd, onClose }) {
  const [nome, setNome] = useState('')
  const [custo, setCusto] = useState(2)
  const [bonus, setBonus] = useState('')

  const handleAdd = () => {
    if (!nome.trim()) return
    onAdd({ id: Date.now(), nome: nome.trim(), custo, bonus: bonus.trim(), ativo: false, custom: true, detalhe: '' })
    onClose()
  }

  return (
    <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal__handle" />
        <div className="modal__title">Nova Característica</div>
        <div className="field-group">
          <label className="field-label">Nome</label>
          <input className="field-input" autoFocus value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" />
        </div>
        <div className="field-group">
          <label className="field-label">Custo (pts de perícia)</label>
          <input className="field-input" type="number" min="1" max="8" value={custo} onChange={e => setCusto(Number(e.target.value))} />
        </div>
        <div className="field-group">
          <label className="field-label">Bônus / Descrição</label>
          <input className="field-input" value={bonus} onChange={e => setBonus(e.target.value)} placeholder="O que ela concede?" />
        </div>
        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>Cancelar</button>
          <button className="btn-primary" onClick={handleAdd} disabled={!nome.trim()}>Adicionar</button>
        </div>
      </div>
    </div>
  )
}

export default function Caracteristicas({ caracteristicas, onChange, onAdd, onRemove, locked }) {
  const [showAdd, setShowAdd] = useState(false)

  const ativas = caracteristicas.filter(c => c.ativo)
  const custoTotal = ativas.reduce((s, c) => s + c.custo, 0)

  const toggle = (index) => { if (!locked) onChange(index, 'ativo', !caracteristicas[index].ativo) }

  return (
    <>
      <Section
        title="Características"
        icon="⭐"
        badge={ativas.length ? `${ativas.length} ativa${ativas.length !== 1 ? 's' : ''}` : undefined}
        defaultOpen
      >
        {caracteristicas.map((c, i) => (
          <div
            key={c.id}
            className={`caract-card${locked ? ' caract-card--locked' : ''}`}
            onClick={() => toggle(i)}
          >
            <div className={`caract-checkbox${c.ativo ? ' caract-checkbox--ativo' : ''}`}>
              {c.ativo && <span className="caract-checkbox-icon">✓</span>}
            </div>

            <div className="caract-body">
              <div className="caract-nome">{c.nome}</div>
              <div className="caract-bonus">{c.bonus}</div>
              {c.ativo && NEEDS_DETAIL.includes(c.nome) && (
                <input
                  className="caract-detalhe-input"
                  value={c.detalhe || ''}
                  onClick={e => e.stopPropagation()}
                  onChange={e => { if (!locked) onChange(i, 'detalhe', e.target.value) }}
                  readOnly={locked}
                  placeholder="Quais 3 perícias recebem +1?"
                />
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, flexShrink: 0 }}>
              <span className="caract-custo">{c.custo}pt</span>
              {c.custom && !locked && (
                <button
                  style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: 11 }}
                  onClick={e => { e.stopPropagation(); onRemove(i) }}
                >✕</button>
              )}
            </div>
          </div>
        ))}

        {!locked && <button className="btn-add" onClick={() => setShowAdd(true)}>+ Nova</button>}

        {custoTotal > 0 && (
          <div className="caract-total">
            custo ativo: <span>{custoTotal} pts de perícia</span>
          </div>
        )}
      </Section>

      {showAdd && <AddCaract onAdd={onAdd} onClose={() => setShowAdd(false)} />}
    </>
  )
}
