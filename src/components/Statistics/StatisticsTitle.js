import PropTypes from 'prop-types';
import { Title } from './StatisticsTitle.styled';

export const StatisticsTitle = ({ title }) => {
  return (
    <Title>
      {title && <h2 className="title">{title}</h2>}
    </Title>
  );
};

StatisticsTitle.propTypes = {
  title: PropTypes.string.isRequired,
}
