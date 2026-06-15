import { useState } from 'react'

export default function Section({ title, icon, badge, badgeVariant, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={`section${open ? ' section--open' : ''}`}>
      <button className="section__header" onClick={() => setOpen(o => !o)}>
        <span className="section__icon">{icon}</span>
        <span className="section__title">{title}</span>
        {badge != null && (
          <span className={`section__badge${badgeVariant ? ` section__badge--${badgeVariant}` : ''}`}>
            {badge}
          </span>
        )}
        <span className="section__arrow">{open ? '▲' : '▼'}</span>
      </button>
      {open && <div className="section__content">{children}</div>}
    </div>
  )
}
