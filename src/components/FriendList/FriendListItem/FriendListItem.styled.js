import styled from "styled-components";

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
