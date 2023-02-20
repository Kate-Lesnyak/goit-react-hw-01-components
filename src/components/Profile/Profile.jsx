import PropTypes from 'prop-types';

import { Section } from 'components/Section/Section';
import { Layout } from 'components/Layout/Layout';

import {
  StyledImg,
  StyledContainer,
  StyledWrapper,
  StyledInfo,
  StyledList,
  StyledItem,
  StyledTitle,
  StyledTag,
  StyledLocation,
  StyledItemLabel,
  StyledItemText,
} from './Profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Section>
      <Layout>
        <StyledContainer>
          <StyledWrapper>
            <StyledImg src={avatar} alt={username} />
            <StyledInfo>
              <StyledTitle>{username}</StyledTitle>
              <StyledTag>{tag}</StyledTag>
              <StyledLocation>{location}</StyledLocation>
            </StyledInfo>
          </StyledWrapper>

          <StyledList>
            <StyledItem>
              <StyledItemLabel>Followers</StyledItemLabel>
              <StyledItemText>{followers}</StyledItemText>
            </StyledItem>

            <StyledItem>
              <StyledItemLabel>Views</StyledItemLabel>
              <StyledItemText>{views}</StyledItemText>
            </StyledItem>

            <StyledItem>
              <StyledItemLabel>Likes</StyledItemLabel>
              <StyledItemText>{likes}</StyledItemText>
            </StyledItem>
          </StyledList>
        </StyledContainer>
      </Layout>
    </Section>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
