export default function NumericField({ value, min = 0, max = 6, onChange }) {
  return (
    <div className="num-field">
      <button
        className="num-field__btn"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label="Diminuir"
      >−</button>
      <span className="num-field__value">{value}</span>
      <button
        className="num-field__btn"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label="Aumentar"
      >+</button>
    </div>
  )
}
