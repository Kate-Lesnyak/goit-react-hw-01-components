import PropTypes from 'prop-types';
import { Percentage } from './Statistics.styled';

export const Statistics = ({ stat: { label, percentage } }) => {
  return (
    <>
      <span className="label">{label}</span>
      <Percentage>{percentage}%</Percentage>
    </>
  );
};

Statistics.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })
}
