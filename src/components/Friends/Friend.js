
import PropTypes from 'prop-types';

export const Friend = ({ friend: {avatar, name, isOnline}}) => {
  return (
    <div>
      {/* { isOnline ? online : offline} */}
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </div>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  }).isRequired
};
