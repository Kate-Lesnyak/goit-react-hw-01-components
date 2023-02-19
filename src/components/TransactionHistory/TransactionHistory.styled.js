import styled from "styled-components";

export const StyledTransactions = styled.table`
width: 600px;
margin: 0 auto;
font-size: 16px;
background-color: #F6FAFB;
border-collapse: collapse;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

caption {
font-size: 32px;
font-weight: 600;
margin-bottom: 20px;
}

thead {
text-transform: uppercase;
background-color: #0595B9;
color: #F6FAFB;
}

th,
td {
  text-align: center;
  padding: 10px;
  border: 1px solid gray;
}

tr:nth-child(even) {
background-color: #E6F6F9;
}
`;
