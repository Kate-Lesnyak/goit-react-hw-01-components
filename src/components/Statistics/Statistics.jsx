import PropTypes from 'prop-types';

import { StyledStaticsSection, StyledTitle } from './Statistics.styled';

import { StatisticsList } from './StatisticsList/StatisticsList';

export const Statistics = ({ title, stats }) => {
  return (
    <StyledStaticsSection>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StatisticsList stats={stats} />
    </StyledStaticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
}
