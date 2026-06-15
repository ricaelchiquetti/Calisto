export default function NumericField({ value, min = 0, max = 6, onChange, disabled = false }) {
  return (
    <div className="num-field">
      <button
        className="num-field__btn"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={disabled || value <= min}
        aria-label="Diminuir"
      >−</button>
      <span className="num-field__value">{value}</span>
      <button
        className="num-field__btn"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={disabled || value >= max}
        aria-label="Aumentar"
      >+</button>
    </div>
  )
}
