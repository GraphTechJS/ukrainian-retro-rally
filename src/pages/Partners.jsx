import PageHero from '../components/PageHero'
import { partners, contact } from '../data/content'
import './Pages.css'

export default function Partners() {
  return (
    <>
      <PageHero
        title="Партнери"
        subtitle="Станьте частиною події, яка поєднує історію, спорт і український бізнес."
      />
      <section className="page-section">
        <div className="partner-grid">
          {partners.map((tier) => (
            <article key={tier.tier} className="partner-card">
              <header>
                <h2>{tier.tier}</h2>
                <p className="partner-card__price">{tier.price}</p>
              </header>
              <p className="partner-card__motto">{tier.motto}</p>
              <ul>
                {tier.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="partner-contact">
          <h3>Звʼязок щодо співпраці</h3>
          <p>
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
            {' · '}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>
            Instagram:{' '}
            <a
              href={`https://instagram.com/${contact.igClub}`}
              target="_blank"
              rel="noreferrer"
            >
              @{contact.igClub}
            </a>
            {' / '}
            <a
              href={`https://instagram.com/${contact.igEvent}`}
              target="_blank"
              rel="noreferrer"
            >
              @{contact.igEvent}
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
