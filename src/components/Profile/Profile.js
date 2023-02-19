import PropTypes from 'prop-types';
import { Img, Container, Wrapper, Info, List, Item, Title, Tag, Location, ItemLabel, ItemText } from './Profile.styled';


export const Profile = ({ user: { username, tag, location, avatar, stats: { followers, views, likes } } }) => {
  return (
    <Container>
      <Wrapper>
        <Img
          src={avatar}
          alt={username}
        />
        <Info>
          <Title>{username}</Title>
          <Tag>{tag}</Tag>
          <Location>{location}</Location>
        </Info>
      </Wrapper>

      <List>
        <Item>
          <ItemLabel>Followers</ItemLabel>
          <ItemText>{followers}</ItemText>
        </Item>
        <Item>
          <ItemLabel>Views</ItemLabel>
          <ItemText>{views}</ItemText>
        </Item>
        <Item>
          <ItemLabel>Likes</ItemLabel>
          <ItemText>{likes}</ItemText>
        </Item>
      </List>
    </Container>
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




