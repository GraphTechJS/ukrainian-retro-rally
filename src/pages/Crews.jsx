import PageHero from '../components/PageHero'
import { crews } from '../data/content'
import './Pages.css'

export default function Crews() {
  return (
    <>
      <PageHero
        title="Екіпажі"
        subtitle="Попередній список учасників Ukrainian Retro Rally 2026."
      />
      <section className="page-section">
        <div className="table-wrap">
          <table className="crew-table">
            <thead>
              <tr>
                <th>№</th>
                <th>Авто</th>
                <th>Пілот</th>
                <th>Штурман</th>
                <th>Клас</th>
                <th>Місто</th>
              </tr>
            </thead>
            <tbody>
              {crews.map((crew) => (
                <tr key={crew.id}>
                  <td className="crew-table__num">{crew.number}</td>
                  <td>{crew.car}</td>
                  <td>{crew.driver}</td>
                  <td>{crew.codriver}</td>
                  <td>{crew.class}</td>
                  <td>{crew.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
