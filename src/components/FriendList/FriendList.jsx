import PropTypes from 'prop-types';

import { Section } from 'components/Section/Section';
import { Layout } from 'components/Layout/Layout';

import { StyledFriendList } from './FriendList.styled';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Section>
      <Layout>
        <StyledFriendList>
          {friends.map(friend => (
            <FriendListItem key={friend.id} friend={friend} />
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
