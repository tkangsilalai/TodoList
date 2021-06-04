import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonStyled = styled.button`
    font-size: 1.5em;
    text-align: center;
    background-color: ${props => props.color ? props.color : "white"};
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 10px;
    width: 100px;
    float: ${props => props.float ? props.float : "" };
`

function Button(props) {
    return (
            <ButtonStyled
                color={props.color}
                onClick={props.onClick}
                float={props.float}
            >
                {props.text}
            </ButtonStyled>
    );
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    float: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;