import styled from "styled-components";

const HeaderComponent = styled.div`
    font-size: 2em;
    text-align: center;
    margin-top: 3%;
`

function Header(props) {
    return (
        <HeaderComponent as = {props.tag ? props.tag : "h1"}>{props.text}</HeaderComponent>
    );
}

export default Header;