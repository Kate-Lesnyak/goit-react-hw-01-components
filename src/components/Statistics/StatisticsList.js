import PropTypes from 'prop-types';
import { Statistics } from './Statistics';

export const StatisticsList = ({stats}) => {
  return (
  <ul className="stat-list">
      {stats.map(stat => (
        <li key={stat.id}>
          <Statistics stat={stat} />
        </li>
      ))}
  </ul>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
