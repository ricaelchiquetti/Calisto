function RecursoCard({ label, colorClass, atual, maximo, onAtualChange, onMaximoChange }) {
  return (
    <div className={`recurso-card recurso-card--${colorClass}`}>
      <div className="recurso-card__label">{label}</div>

      <div className="recurso-card__controls">
        <button
          className="recurso-card__btn"
          onClick={() => onAtualChange(Math.max(0, atual - 1))}
          aria-label={`Diminuir ${label}`}
        >−</button>
        <div className="recurso-card__current">{atual}</div>
        <button
          className="recurso-card__btn"
          onClick={() => onAtualChange(Math.min(maximo, atual + 1))}
          aria-label={`Aumentar ${label}`}
        >+</button>
      </div>

      <div className="recurso-card__max-row">
        <span className="recurso-card__max-label">máx</span>
        <button
          className="recurso-card__max-btn"
          onClick={() => { const v = Math.max(0, maximo - 1); onMaximoChange(v); if (atual > v) onAtualChange(v) }}
        >−</button>
        <span className="recurso-card__max-value">{maximo}</span>
        <button
          className="recurso-card__max-btn"
          onClick={() => onMaximoChange(Math.min(30, maximo + 1))}
        >+</button>
      </div>
    </div>
  )
}

export default function VidaSorte({ vida, sorte, onVidaChange, onSorteChange }) {
  return (
    <div className="vida-sorte">
      <RecursoCard
        label="VIDA"
        colorClass="vida"
        atual={vida.atual}
        maximo={vida.maximo}
        onAtualChange={v => onVidaChange('atual', v)}
        onMaximoChange={v => onVidaChange('maximo', v)}
      />
      <RecursoCard
        label="SORTE"
        colorClass="sorte"
        atual={sorte.atual}
        maximo={sorte.maximo}
        onAtualChange={v => onSorteChange('atual', v)}
        onMaximoChange={v => onSorteChange('maximo', v)}
      />
    </div>
  )
}
