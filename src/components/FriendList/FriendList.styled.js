import styled from 'styled-components';

export const StyledFriendList = styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
width: 300px;
margin: 0 auto;
padding: 40px;
border-radius: 4px;
box-shadow:  rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

export const StyledFriend = styled.li`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 10px;
padding: 10px 20px;
border-radius: 4px;
box-shadow:  rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
