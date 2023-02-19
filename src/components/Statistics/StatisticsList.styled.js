import styled from "styled-components";

export const List = styled.ul`
display: flex;
justify-content: center;
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
gap: 5px;
padding: 10px;
align-items: center;
background-color: grey;
color: white;
`;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
