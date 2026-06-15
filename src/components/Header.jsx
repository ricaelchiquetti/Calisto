import { useRef } from 'react'

export default function Header({ nome, locked, onToggleLock, onExport, onImport, onReset }) {
  const fileRef = useRef(null)

  return (
    <header className="header">
      <div className="header__brand">
        <div className="header__title">TWD RPG</div>
        <div className={`header__name${!nome ? ' header__name--placeholder' : ''}`}>
          {nome || 'sem personagem'}
        </div>
      </div>

      <div className="header__actions">
        <input
          ref={fileRef}
          type="file"
          accept=".json"
          style={{ display: 'none' }}
          onChange={e => { if (e.target.files[0]) onImport(e.target.files[0]) }}
        />
        <button
          className={`btn-icon${locked ? ' btn-icon--locked' : ''}`}
          onClick={onToggleLock}
          title={locked ? 'Desbloquear ficha' : 'Bloquear ficha (modo sessão)'}
        >
          {locked ? '🔒' : '🔓'}
        </button>
        <button className="btn-icon" onClick={() => fileRef.current.click()} title="Importar JSON">
          📂
        </button>
        <button className="btn-icon" onClick={onExport} title="Exportar JSON">
          💾
        </button>
        <button className="btn-icon btn-icon--danger" onClick={onReset} title="Resetar ficha">
          🗑
        </button>
      </div>
    </header>
  )
}
