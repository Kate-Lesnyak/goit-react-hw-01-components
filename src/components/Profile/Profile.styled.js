import styled from "styled-components";

export const StyledImg = styled.img`
object-fit: cover;
width: 200px;
border-radius: 50%;
background-color: #f5f4fa;
margin: 0 auto;
margin-bottom: 10px;
`;

export const StyledContainer = styled.div`
border-radius: 4px;
width: 300px;
margin: 0 auto;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

export const StyledWrapper = styled.div`
padding: 30px 10px;
`;

export const StyledInfo = styled.div`
text-align: center;
`;

export const StyledList = styled.ul`
display: flex;
background-color: #eee;
`;

export const StyledItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
border-top: 1px solid #cecece;
width: 33.33%;

:not(:last-child) {
border-right: 1px solid #cecece;
}
`;

export const StyledTitle = styled.p`
font-weight: 500;
font-size: 32px;
margin-bottom: 8px;
`;

export const StyledTag = styled.p`
font-size: 16px;
color: gray;
margin-bottom: 8px;
`;

export const StyledLocation = styled.p`
font-size: 16px;
color: gray;
`;

export const StyledItemLabel = styled.p`
font-size: 14px;
color: gray;
`;

export const StyledItemText = styled.p`
font-size: 20px;
font-weight: 500;
`;
