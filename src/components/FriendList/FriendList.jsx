import PropTypes from 'prop-types';
import { Friend } from './FriendListItem/FriendListItem';

import { StyledFriendList, StyledFriend } from './FriendList.styled';



export const FriendList = ({ friends }) => {
  return (
    <StyledFriendList>
      {friends.map(friend => (
        <StyledFriend key={friend.id}>
          <Friend friend={friend} />
      </StyledFriend>
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
