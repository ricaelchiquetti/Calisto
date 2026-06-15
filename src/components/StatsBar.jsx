function AtributoBox({ label, hint, value, onChange, locked }) {
  return (
    <div className="stat-box">
      <div className="stat-box__label">{label}</div>
      <div className="stat-box__value">{value}</div>
      <div className="stat-box__hint">{hint}</div>
      {!locked && (
        <div className="stat-box__controls">
          <button className="stat-btn" onClick={() => onChange(Math.max(0, value - 1))} disabled={value <= 0}>−</button>
          <button className="stat-btn" onClick={() => onChange(Math.min(6, value + 1))} disabled={value >= 6}>+</button>
        </div>
      )}
    </div>
  )
}

function RecursoBox({ label, color, atual, maximo, onAtualChange, onMaximoChange, locked }) {
  return (
    <div className={`stat-box stat-box--${color}`}>
      <div className="stat-box__label">{label}</div>

      {locked ? (
        <div className="stat-box__fraction">
          <span className="stat-box__fraction-atual">{atual}</span>
          <span className="stat-box__fraction-sep">/</span>
          <span className="stat-box__fraction-max">{maximo}</span>
        </div>
      ) : (
        <div className="stat-box__value">{atual}</div>
      )}

      <div className="stat-box__controls">
        <button className="stat-btn" onClick={() => onAtualChange(Math.max(0, atual - 1))}>−</button>
        <button className="stat-btn" onClick={() => onAtualChange(Math.min(maximo, atual + 1))}>+</button>
      </div>

      {!locked && (
        <div className="stat-box__max-row">
          <span>máx</span>
          <button className="stat-btn stat-btn--sm" onClick={() => {
            const v = Math.max(0, maximo - 1)
            onMaximoChange(v)
            if (atual > v) onAtualChange(v)
          }}>−</button>
          <span className="stat-box__max-value">{maximo}</span>
          <button className="stat-btn stat-btn--sm" onClick={() => onMaximoChange(Math.min(30, maximo + 1))}>+</button>
        </div>
      )}
    </div>
  )
}

export default function StatsBar({ atributos, recursos, onAtributoChange, onVidaChange, onSorteChange, locked }) {
  return (
    <div className="stats-bar">
      <div className="stats-group">
        <div className="stats-group__label">Atributos</div>
        <div className="stats-group__boxes">
          <AtributoBox
            label="FÍSICO"
            hint="defesa física · recuperação"
            value={atributos.fisico}
            onChange={v => onAtributoChange('fisico', v)}
            locked={locked}
          />
          <AtributoBox
            label="MENTE"
            hint="defesa mental · iniciativa"
            value={atributos.mente}
            onChange={v => onAtributoChange('mente', v)}
            locked={locked}
          />
        </div>
      </div>

      <div className="stats-group">
        <div className="stats-group__label">Recursos</div>
        <div className="stats-group__boxes">
          <RecursoBox
            label="VIDA"
            color="vida"
            atual={recursos.vida.atual}
            maximo={recursos.vida.maximo}
            onAtualChange={v => onVidaChange('atual', v)}
            onMaximoChange={v => onVidaChange('maximo', v)}
            locked={locked}
          />
          <RecursoBox
            label="SORTE"
            color="sorte"
            atual={recursos.sorte.atual}
            maximo={recursos.sorte.maximo}
            onAtualChange={v => onSorteChange('atual', v)}
            onMaximoChange={v => onSorteChange('maximo', v)}
            locked={locked}
          />
        </div>
      </div>
    </div>
  )
}
