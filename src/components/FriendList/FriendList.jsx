import PropTypes from 'prop-types';

import { Section } from 'components/Section/Section';
import { Layout } from 'components/Layout/Layout';
import { FriendListItem } from './FriendListItem/FriendListItem';

import { StyledFriendList, StyledFriendListItem } from './FriendList.styled';



export const FriendList = ({ friends }) => {
  return (
    <Section>
      <Layout>
        <StyledFriendList>
          {friends.map(friend => (
            <StyledFriendListItem key={friend.id}>
              <FriendListItem friend={friend} />
            </StyledFriendListItem>
          ))}
        </StyledFriendList>
      </Layout>
    </Section>



  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
