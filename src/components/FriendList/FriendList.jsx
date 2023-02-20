import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';

import { StyledFriendList, StyledFriendListItem } from './FriendList.styled';



export const FriendList = ({ friends }) => {
  return (
    <StyledFriendList>
      {friends.map(friend => (
        <StyledFriendListItem key={friend.id}>
          <FriendListItem friend={friend} />
      </StyledFriendListItem>
      ))}
    </StyledFriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
