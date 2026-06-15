import { useState, useEffect } from 'react'
import { defaultCharacter } from './data/defaultCharacter.js'
import Header from './components/Header.jsx'
import StatsBar from './components/StatsBar.jsx'
import Identificacao from './components/Identificacao.jsx'
import Pericias from './components/Pericias.jsx'
import Caracteristicas from './components/Caracteristicas.jsx'
import Armas from './components/Armas.jsx'
import Experiencia from './components/Experiencia.jsx'
import Notas from './components/Notas.jsx'

const STORAGE_KEY = 'twd-rpg-character'

function loadCharacter() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : structuredClone(defaultCharacter)
  } catch {
    return structuredClone(defaultCharacter)
  }
}

export default function App() {
  const [char, setChar] = useState(loadCharacter)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(char))
  }, [char])

  const set = (mutator) => setChar(prev => {
    const next = structuredClone(prev)
    mutator(next)
    return next
  })

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(char, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${char.identificacao.nome || 'personagem'}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const importJSON = (file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      try { setChar(JSON.parse(e.target.result)) }
      catch { alert('Arquivo JSON inválido.') }
    }
    reader.readAsText(file)
  }

  const resetChar = () => {
    if (window.confirm('Resetar a ficha? Todos os dados serão perdidos.')) {
      setChar(structuredClone(defaultCharacter))
    }
  }

  const custoCaract = char.caracteristicas.filter(c => c.ativo).reduce((s, c) => s + c.custo, 0)
  const pontosPericiasUsados = char.pericias.reduce((s, p) => s + p.valor, 0)
  const periciasDisponiveis = 12 - custoCaract - pontosPericiasUsados
  const limitePericia = char.caracteristicas.find(c => c.nome === 'Limite Sobre-humano' && c.ativo) ? 8 : 6

  return (
    <div className="app">
      {/* ── HEADER ── */}
      <Header
        nome={char.identificacao.nome}
        onExport={exportJSON}
        onImport={importJSON}
        onReset={resetChar}
      />

      {/* ── STATS BAR: Físico | Mente | Vida | Sorte ── */}
      <StatsBar
        atributos={char.atributos}
        recursos={char.recursos}
        onAtributoChange={(field, val) => set(c => { c.atributos[field] = val })}
        onVidaChange={(field, val) => set(c => { c.recursos.vida[field] = val })}
        onSorteChange={(field, val) => set(c => { c.recursos.sorte[field] = val })}
      />

      {/* ── IDENTIFICAÇÃO ── */}
      <Identificacao
        data={char.identificacao}
        onChange={(field, val) => set(c => { c.identificacao[field] = val })}
      />

      {/*
        ── GRID PRINCIPAL ──
        Mobile:  coluna única
        Tablet+: [Características (sidebar)] | [Perícias]
        Imita o layout D&D 5e: saving throws/stats na esquerda, skills na direita
      */}
      <div className="sheet-grid">
        <div className="sheet-left">
          <Pericias
            pericias={char.pericias}
            disponiveis={periciasDisponiveis}
            limiteMax={limitePericia}
            onChange={(index, field, val) => set(c => { c.pericias[index][field] = val })}
            onAdd={(pericia) => set(c => { c.pericias.push(pericia) })}
            onRemove={(index) => set(c => { c.pericias.splice(index, 1) })}
          />
        </div>

        <div className="sheet-right">
          <Caracteristicas
            caracteristicas={char.caracteristicas}
            onChange={(index, field, val) => set(c => { c.caracteristicas[index][field] = val })}
            onAdd={(caract) => set(c => { c.caracteristicas.push(caract) })}
            onRemove={(index) => set(c => { c.caracteristicas.splice(index, 1) })}
          />
        </div>
      </div>

      {/* ── ARMAS (full width) ── */}
      <Armas
        armas={char.armas}
        onAdd={(arma) => set(c => { c.armas.push(arma) })}
        onRemove={(index) => set(c => { c.armas.splice(index, 1) })}
      />

      <Notas
        value={char.notas}
        onChange={(val) => set(c => { c.notas = val })}
      />

      <Experiencia
        experiencia={char.experiencia}
        onChange={(field, val) => set(c => { c.experiencia[field] = val })}
      />
    </div>
  )
}
