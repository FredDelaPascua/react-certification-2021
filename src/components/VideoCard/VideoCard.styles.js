import styled from "styled-components";

const card = styled.div`
    background-color: rgba(250,250,250, .4);
    box-shadow: 2px 2px 5px 5px gray;
    width: 250px;
    border-radius: 10px;
    margin-bottom: 30px;
`
const text = styled.p`
    font-size: 15px;
    display: none;
`

const title = styled.p`
    padding: 2px;
`

const Style = {card, text, title}
export default Style