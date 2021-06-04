import styled from "styled-components";
import PropTypes from "prop-types";

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

Header.propTypes = {
    tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
    text: PropTypes.string
}

export default Header;