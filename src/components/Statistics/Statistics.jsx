import propTypes from 'prop-types';
import data from './data.json';
import css from './Statistics.module.css';

export const Statistics = () => {
  const component = data.map(el => {
    return <li className={css.item} key={el.id}>
      <span className={css.label}>{el.label}</span>
      <span className={css.percentage}>{el.percentage}%</span>
    </li>
  })
    return <section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>

  <ul className={css.statlist}>
    {component}
  </ul>
</section>
}

Statistics.propTypes = {
  stats: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  )
}