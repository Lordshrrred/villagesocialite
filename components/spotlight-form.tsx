export function SpotlightForm() {
  return (
    <section className="overflow-hidden rounded-[2.3rem] border border-[#8ee3f0]/55 bg-white shadow-[0_24px_70px_rgba(43,163,191,0.14)]">
      <div className="bg-[linear-gradient(135deg,#48b8d9,#6ce7d7)] px-6 py-12 text-center text-white sm:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/75">
          Join the movement
        </p>
        <h2 className="mt-4 font-[family:var(--font-cormorant)] text-5xl font-semibold sm:text-6xl">
          Step Into the Spotlight
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-white/88">
          Whether you&apos;re looking to market your business, promote your art, or simply plug into the refined side of The Villages, this is your front-door invite.
        </p>
      </div>
      <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8">
        <p className="mb-8 text-center text-2xl font-semibold text-[var(--color-sea)]">
          Showcasing the best talent, businesses, and stories in our community.
        </p>
        <form className="space-y-6 rounded-[2rem] bg-[var(--color-paper)] p-6 shadow-[0_20px_60px_rgba(18,27,33,0.06)] sm:p-8">
          <div className="space-y-2">
            <label className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[var(--color-ink)]">
              First and Last Name <span className="text-red-500">*</span>
            </label>
            <input className="w-full rounded-[1rem] border border-[#d9e6ea] bg-white px-5 py-4 text-base outline-none" placeholder="E.g. John Smith" />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[var(--color-ink)]">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input className="w-full rounded-[1rem] border border-[#d9e6ea] bg-white px-5 py-4 text-base outline-none" placeholder="E.g. john@doe.com" />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[var(--color-ink)]">
                Cell Phone
              </label>
              <input className="w-full rounded-[1rem] border border-[#d9e6ea] bg-white px-5 py-4 text-base outline-none" placeholder="E.g. +1 300 400 5000" />
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[var(--color-ink)]">What brings you here?</p>
            <label className="flex items-center gap-3 text-base text-[var(--color-ink)]"><input type="checkbox" className="h-5 w-5 rounded border-[#1f6671]" /> I currently live in The Villages, Florida</label>
            <label className="flex items-center gap-3 text-base text-[var(--color-ink)]"><input type="checkbox" className="h-5 w-5 rounded border-[#1f6671]" /> I want to move to The Villages, Florida</label>
            <label className="flex items-center gap-3 text-base text-[var(--color-ink)]"><input type="checkbox" className="h-5 w-5 rounded border-[#1f6671]" /> I&apos;m building a business, brand, or creative project</label>
          </div>
          <div className="space-y-3">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[var(--color-ink)]">
              Consent to receive emails and texts <span className="text-red-500">*</span>
            </p>
            <label className="flex items-start gap-3 text-sm leading-7 text-[var(--color-ink-soft)]">
              <input type="checkbox" className="mt-1 h-5 w-5 rounded border-[#1f6671]" />
              I agree to receive promotional emails and text messages from Village Socialite, including special offers, event invitations, and updates.
            </label>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-[linear-gradient(90deg,#4cb7df,#6fe6d6)] px-6 py-4 text-sm font-extrabold uppercase tracking-[0.3em] text-white shadow-[0_18px_45px_rgba(76,183,223,0.22)] transition hover:-translate-y-0.5"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
