import PropTypes from 'prop-types';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import { StyledList } from './StatisticsList.styled';
import { StyledItem } from './StatisticsList.styled';

// import { getRandomHexColor } from 'utils/randomColor';

export const StatisticsList = ({ stats }) => {
  return (
    <StyledList>
      {stats.map(stat => (
        // style={{ backgroundColor: getRandomHexColor() }}
        <StyledItem key={stat.id}>
          <StatisticsItem stat={stat} />
        </StyledItem>
      ))}
    </StyledList>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
