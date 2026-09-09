import './PageHero.css'

export default function PageHero({ title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="page-hero__inner">
        <p className="page-hero__eyebrow">Ukrainian Retro Rally</p>
        <h1>{title}</h1>
        {subtitle ? <p className="page-hero__sub">{subtitle}</p> : null}
      </div>
    </section>
  )
}
