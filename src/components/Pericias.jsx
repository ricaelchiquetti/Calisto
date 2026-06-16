import { useState } from 'react'
import { Target, Star, X, Plus } from 'lucide-react'
import Section from './Section.jsx'
import NumericField from './NumericField.jsx'

const MAX_ESPECIALIDADES = 2

function AddPericia({ onAdd, onClose }) {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')

  const handleAdd = () => {
    if (!nome.trim()) return
    onAdd({ id: Date.now(), nome: nome.trim(), descricao: descricao.trim(), valor: 0, bonus: 0, especialidade: false, custom: true })
    onClose()
  }

  return (
    <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal__handle" />
        <div className="modal__title">Nova Perícia</div>
        <div className="field-group">
          <label className="field-label">Nome</label>
          <input className="field-input" autoFocus value={nome} onChange={e => setNome(e.target.value)} placeholder="Ex: Medicina, Culinária..." />
        </div>
        <div className="field-group">
          <label className="field-label">Descrição (opcional)</label>
          <input className="field-input" value={descricao} onChange={e => setDescricao(e.target.value)} placeholder="O que essa perícia cobre?" />
        </div>
        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>Cancelar</button>
          <button className="btn-primary" onClick={handleAdd} disabled={!nome.trim()}>Adicionar</button>
        </div>
      </div>
    </div>
  )
}

export default function Pericias({ pericias, disponiveis, limiteMax, onChange, onAdd, onRemove, locked }) {
  const [showAdd, setShowAdd] = useState(false)

  const especialidades = pericias.filter(p => p.especialidade)
  const badgeVariant = disponiveis < 0 ? 'warn' : disponiveis === 0 ? 'ok' : undefined

  const toggleEspecialidade = (index) => {
    if (locked) return
    const current = pericias[index].especialidade
    if (!current && especialidades.length >= MAX_ESPECIALIDADES) return
    onChange(index, 'especialidade', !current)
  }

  return (
    <>
      <Section
        title="Perícias"
        icon={<Target size={13} />}
        badge={`${disponiveis} PTS livre${disponiveis !== 1 ? 's' : ''}`}
        badgeVariant={badgeVariant}
        defaultOpen
      >
        <div className="especialidades-hint">
          ★ Até 2 especialidades (perícias ligadas). Tirou 1 no dado? Rola de novo.
          {especialidades.length > 0 && (
            <span> ({especialidades.length}/2)</span>
          )}
        </div>

        <div className="pericia-cols-header">
          <span />
          <span />
          <span>Pts</span>
          <span>Bônus</span>
          <span>Total</span>
        </div>

        {pericias.map((p, i) => {
          const anterior = pericias[i - 1]
          const novoGrupo = p.grupo && (!anterior || anterior.grupo !== p.grupo)
          const bonus = p.bonus ?? 0
          const total = (p.valor || 0) + bonus

          return (
            <div key={p.id}>
              {novoGrupo && !p.custom && (
                <div className="pericia-grupo-label">
                  {p.grupo === 'base' ? 'Base — Sistema Calisto' : 'C+ — Apocalipse Zumbi'}
                </div>
              )}
              <div className="pericia-row">
                <button
                  className={`pericia-star${p.especialidade ? ' pericia-star--ativa' : ''}`}
                  onClick={() => toggleEspecialidade(i)}
                  title={p.especialidade ? 'Remover especialidade' : 'Marcar como especialidade'}
                  disabled={!p.especialidade && especialidades.length >= MAX_ESPECIALIDADES}
                >
                  {p.especialidade ? <Star size={13} fill="currentColor" /> : <Star size={13} />}
                </button>

                <div className="pericia-info">
                  <div className="pericia-nome" title={p.descricao}>{p.nome}</div>
                  {p.nota !== undefined && (
                    <input
                      className="pericia-nota-input"
                      value={p.nota || ''}
                      onChange={e => onChange(i, 'nota', e.target.value)}
                      placeholder="especificar tipo..."
                    />
                  )}
                </div>

                <NumericField
                  value={p.valor}
                  max={limiteMax}
                  onChange={v => onChange(i, 'valor', v)}
                  disabled={locked}
                />

                <input
                  type="number"
                  className="pericia-bonus-input"
                  value={bonus}
                  onChange={e => onChange(i, 'bonus', parseInt(e.target.value, 10) || 0)}
                  disabled={locked}
                />

                <span
                  className="pericia-total"
                  style={{ color: total > 0 ? 'var(--green)' : 'var(--text-muted)' }}
                >
                  {total}
                </span>

                {p.custom && !locked && (
                  <button className="pericia-remove" onClick={() => onRemove(i)} title="Remover"><X size={12} /></button>
                )}
              </div>
            </div>
          )
        })}

        {!locked && <button className="btn-add" onClick={() => setShowAdd(true)}><Plus size={13} /> Nova perícia</button>}
      </Section>

      {showAdd && <AddPericia onAdd={onAdd} onClose={() => setShowAdd(false)} />}
    </>
  )
}
