function Footer() {
  return (
    <footer className="border-t border-copper/10 px-4 py-8 sm:px-6 lg:px-8" aria-label="Footer">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm leading-6 text-charcoal/72 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xl text-charcoal">Little Lion · Big Help</p>
          <p>Neighborhood Handyman</p>
        </div>
        <div className="flex flex-col gap-1 sm:items-end">
          <a href="tel:+19014619573" className="font-bold text-copper hover:text-sage">
            (901) 461-9573
          </a>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/littlelionbighelp"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sage"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/littlelionbighelp"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sage"
            >
              Facebook
            </a>
          </div>
          <p>© 2026 Jeremy Stanfill · Little Lion · Big Help</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer