import styled from "styled-components";
import { getRandomHexColor } from 'utils/randomColor';

export const StyledList = styled.ul`
display: flex;
justify-content: center;
`;

export const StyledItem = styled.li`
display: flex;
flex-direction: column;
flex-basis: calc(100% / 5);
padding: 10px;
align-items: center;
color: white;
background-color: ${() => getRandomHexColor()};
`;

