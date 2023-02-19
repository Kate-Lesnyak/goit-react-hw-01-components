import PropTypes from 'prop-types';
import { StyledPercentage } from './StatisticsItem.styled';

export const StatisticsItem = ({ stat: { label, percentage } }) => {
  return (
    <>
      <span>{label}</span>
      <StyledPercentage>{percentage}%</StyledPercentage>
    </>
  );
};

StatisticsItem.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
}
