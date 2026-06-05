function PlaceholderImage({ title, alt, detail, className = '' }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={[
        'relative overflow-hidden rounded-[2rem] border border-copper/15 bg-gradient-to-br from-white/90 via-cream to-clay/85 p-5 shadow-card',
        className,
      ].join(' ')}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,162,74,0.22),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(63,107,102,0.16),transparent_32%)]" />
      <div className="relative flex h-full min-h-48 flex-col justify-between rounded-[1.5rem] border border-dashed border-copper/30 p-5 text-left">
        <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-sage">
          Photo Placeholder
        </span>
        <div className="space-y-2">
          <p className="font-display text-2xl text-charcoal">{title}</p>
          <p className="max-w-sm text-sm leading-6 text-charcoal/75">{detail}</p>
        </div>
      </div>
    </div>
  )
}

export default PlaceholderImage