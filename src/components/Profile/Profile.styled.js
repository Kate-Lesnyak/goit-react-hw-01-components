import styled from "styled-components";

export const Img = styled.img`
object-fit: cover;
width: 200px;
border-radius: 50%;
background-color: #f5f4fa;
margin: 0 auto;
margin-bottom: 10px;
`;

export const Container = styled.div`
border-radius: 4px;
width: 300px;
margin: 0 auto;
box-shadow:  0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
padding: 30px 10px;
`;

export const Info = styled.div`
text-align: center;
`;

export const List = styled.ul`
display: flex;
background-color: #eee;
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
border-top: 1px solid #cecece;
width: 33.33%;

border-right: 1px solid #cecece;
border-left: 1px solid #cecece;
`;

export const Title = styled.p`
font-weight: 500;
font-size: 20px;
margin-bottom: 8px;
`;

export const Tag = styled.p`
color: gray;
margin-bottom: 8px;
`;

export const Location = styled.p`
color: gray;
`;

export const ItemLabel = styled.p`
font-size: 12px;
color: gray;
`;

export const ItemText = styled.p`
font-size: 16px;
font-weight: 500;
`;
