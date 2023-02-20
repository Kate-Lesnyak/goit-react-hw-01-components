import PropTypes from 'prop-types';

import { Section } from 'components/Section/Section';
import { Layout } from 'components/Layout/Layout';
import { StatisticsList } from './StatisticsList/StatisticsList';

import { StyledStaticsSection, StyledTitle } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Layout>
        <StyledStaticsSection>
          {title && <StyledTitle>{title}</StyledTitle>}
          <StatisticsList stats={stats} />
        </StyledStaticsSection>
      </Layout>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
};
