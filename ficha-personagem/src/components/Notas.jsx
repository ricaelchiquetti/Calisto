import Section from './Section.jsx'

export default function Notas({ value, onChange }) {
  return (
    <Section title="Notas & Inventário" icon="📝" defaultOpen>
      <textarea
        className="notas-area"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Itens carregados, anotações da sessão, contatos, locais conhecidos..."
      />
    </Section>
  )
}
