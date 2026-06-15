import { useState } from 'react'
import Section from './Section.jsx'
import { TIPOS_ARMA } from '../data/defaultCharacter.js'

function AddArma({ onAdd, onClose }) {
  const [nome, setNome] = useState('')
  const [tipo, setTipo] = useState('Contusão')
  const [bonusAtaque, setBonusAtaque] = useState(TIPOS_ARMA['Contusão'].ataque)
  const [bonusDano, setBonusDano] = useState(TIPOS_ARMA['Contusão'].dano)
  const [notas, setNotas] = useState('')

  const handleTipoChange = (t) => {
    setTipo(t)
    setBonusAtaque(TIPOS_ARMA[t].ataque)
    setBonusDano(TIPOS_ARMA[t].dano)
  }

  const handleAdd = () => {
    if (!nome.trim()) return
    onAdd({ id: Date.now(), nome: nome.trim(), tipo, bonusAtaque, bonusDano, notas: notas.trim() })
    onClose()
  }

  return (
    <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal__handle" />
        <div className="modal__title">Adicionar Arma</div>

        <div className="field-group">
          <label className="field-label">Nome</label>
          <input
            className="field-input"
            autoFocus
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Ex: Revólver .357, Machado..."
          />
        </div>

        <div className="field-group">
          <label className="field-label">Tipo</label>
          <select className="field-select" value={tipo} onChange={e => handleTipoChange(e.target.value)}>
            {Object.keys(TIPOS_ARMA).map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div className="grid-2">
          <div className="field-group">
            <label className="field-label">Bônus de Ataque</label>
            <input
              className="field-input"
              type="number"
              value={bonusAtaque}
              onChange={e => setBonusAtaque(Number(e.target.value))}
            />
          </div>
          <div className="field-group">
            <label className="field-label">Bônus de Dano</label>
            <input
              className="field-input"
              type="number"
              value={bonusDano}
              onChange={e => setBonusDano(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="field-group">
          <label className="field-label">Notas (opcional)</label>
          <input
            className="field-input"
            value={notas}
            onChange={e => setNotas(e.target.value)}
            placeholder="Alcance, munição, qualidade..."
          />
        </div>

        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>Cancelar</button>
          <button className="btn-primary" onClick={handleAdd} disabled={!nome.trim()}>Adicionar</button>
        </div>
      </div>
    </div>
  )
}

export default function Armas({ armas, onAdd, onRemove }) {
  const [showAdd, setShowAdd] = useState(false)

  return (
    <>
      <Section title="Armas & Equipamentos" icon="🔫" badge={armas.length || undefined}>
        <div className="arma-list">
          {armas.length === 0 && (
            <div style={{ color: 'var(--text-muted)', fontSize: 13, textAlign: 'center', padding: '12px 0' }}>
              Nenhuma arma cadastrada
            </div>
          )}
          {armas.map((a, i) => (
            <div className="arma-card" key={a.id}>
              <div className="arma-header">
                <div className="arma-nome">{a.nome}</div>
                <span className="arma-tipo-badge">{a.tipo}</span>
                <button className="arma-remove" onClick={() => onRemove(i)} title="Remover">✕</button>
              </div>

              <div className="arma-stats">
                <div className="arma-stat">
                  <div className="arma-stat__label">Ataque</div>
                  <div className="arma-stat__value">+{a.bonusAtaque}</div>
                </div>
                <div className="arma-stat">
                  <div className="arma-stat__label">Dano</div>
                  <div className="arma-stat__value">+{a.bonusDano}</div>
                </div>
              </div>

              {a.notas && <div className="arma-notas">{a.notas}</div>}
            </div>
          ))}
        </div>

        <button className="btn-add" onClick={() => setShowAdd(true)}>+ Adicionar arma</button>
      </Section>

      {showAdd && <AddArma onAdd={onAdd} onClose={() => setShowAdd(false)} />}
    </>
  )
}
