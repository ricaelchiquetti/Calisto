import { useRef } from 'react'
import { Lock, Unlock, FolderOpen, Download, Trash2, Sun, Moon } from 'lucide-react'

export default function Header({ nome, locked, onToggleLock, onExport, onImport, onReset, theme, onToggleTheme }) {
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
          className="btn-icon"
          onClick={onToggleTheme}
          title={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <button
          className={`btn-icon${locked ? ' btn-icon--locked' : ''}`}
          onClick={onToggleLock}
          title={locked ? 'Desbloquear ficha' : 'Bloquear ficha (modo sessão)'}
        >
          {locked ? <Lock size={16} /> : <Unlock size={16} />}
        </button>
        <button className="btn-icon" onClick={() => fileRef.current.click()} title="Importar JSON">
          <FolderOpen size={16} />
        </button>
        <button className="btn-icon" onClick={onExport} title="Exportar JSON">
          <Download size={16} />
        </button>
        <button className="btn-icon btn-icon--danger" onClick={onReset} title="Resetar ficha">
          <Trash2 size={16} />
        </button>
      </div>
    </header>
  )
}
