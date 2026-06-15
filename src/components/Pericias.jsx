import { useState } from 'react'
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

export default function Pericias({ pericias, disponiveis, limiteMax, onChange, onAdd, onRemove }) {
  const [showAdd, setShowAdd] = useState(false)

  const especialidades = pericias.filter(p => p.especialidade)
  const badgeVariant = disponiveis < 0 ? 'warn' : disponiveis === 0 ? 'ok' : undefined

  const toggleEspecialidade = (index) => {
    const current = pericias[index].especialidade
    if (!current && especialidades.length >= MAX_ESPECIALIDADES) return
    onChange(index, 'especialidade', !current)
  }

  return (
    <>
      <Section
        title="Perícias"
        icon="🎯"
        badge={`${disponiveis} livre${disponiveis !== 1 ? 's' : ''}`}
        badgeVariant={badgeVariant}
        defaultOpen
      >
        <div className="especialidades-hint">
          ★ Até 2 especialidades (perícias ligadas). Tirou 1 no dado? Rola de novo.
          {especialidades.length > 0 && (
            <span> ({especialidades.length}/2)</span>
          )}
        </div>

        {pericias.map((p, i) => {
          const anterior = pericias[i - 1]
          const novoGrupo = p.grupo && (!anterior || anterior.grupo !== p.grupo)

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
                  {p.especialidade ? '★' : '☆'}
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
                />

                {p.custom && (
                  <button className="pericia-remove" onClick={() => onRemove(i)} title="Remover">✕</button>
                )}
              </div>
            </div>
          )
        })}

        <button className="btn-add" onClick={() => setShowAdd(true)}>+ Nova perícia</button>

        <div className="pontos-info">
          Pts usados: <span>{pericias.reduce((s, p) => s + p.valor, 0)}</span> / 12
          {disponiveis < 0 && (
            <span style={{ color: 'var(--red)', marginLeft: 6 }}>({Math.abs(disponiveis)} acima — use XP)</span>
          )}
        </div>
      </Section>

      {showAdd && <AddPericia onAdd={onAdd} onClose={() => setShowAdd(false)} />}
    </>
  )
}
