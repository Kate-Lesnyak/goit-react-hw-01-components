import PropTypes from 'prop-types';

import { StyledStatus, StyledAvatar, StyledName } from './FriendListItem.styled';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <StyledStatus isOnline={isOnline}/>
      <StyledAvatar src={avatar} alt={name}/>
      <StyledName>{name}</StyledName>
    </>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
