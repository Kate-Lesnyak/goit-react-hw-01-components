import styled from "styled-components";

export const StyledFriendListItem = styled.li`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 10px;
padding: 10px 20px;
border-radius: 4px;
box-shadow:  rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

export const StyledStatus = styled.span`
border: transparent;
border-radius: 50%;
height: 16px;
width: 16px;
background-color:${({ isOnline }) =>
    isOnline ? 'green' : 'red'};
`;

export const StyledAvatar = styled.img`
width: 50px;
`;

export const StyledName = styled.p`
font-size: 18px;
font-weight: 600;
`;
