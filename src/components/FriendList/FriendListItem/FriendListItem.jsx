import PropTypes from 'prop-types';

import {
  StyledFriendListItem,
  StyledStatus,
  StyledAvatar,
  StyledName,
} from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <StyledFriendListItem>
      <StyledStatus isOnline={isOnline} />
      <StyledAvatar src={avatar} alt={name} />
      <StyledName>{name}</StyledName>
    </StyledFriendListItem>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
