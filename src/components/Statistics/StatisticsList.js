import PropTypes from 'prop-types';
import { Statistics } from './Statistics';
import { List } from './StatisticsList.styled';
import { Item } from './StatisticsList.styled';

export const StatisticsList = ({ stats }) => {
  return (
    <List>
      {stats.map(stat => (
        <Item key={stat.id}>
          <Statistics stat={stat} />
        </Item>
      ))}
    </List>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
