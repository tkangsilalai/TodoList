import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import PropTypes from "prop-types";
import {useModal} from "./Modal";

const Input = styled.input`
    font-size: 1.5em;
    text-align: left;
    width: ${props => props.isEdit ? "60%": "40%"};
    margin-bottom: 2%;
    border-radius: 3px;
    padding: 10px;
`

function Forms(props) {

    const [, setModalText] = useModal();

    const [text, setText] = useState(props.text);

    function handleClick(){
        if(text === ""){
            return setModalText("Cannot add null!");
        }
        else if(text.length < 2 ){
            return setModalText("Todo must > 2 characters!");
        }
        else if(text.length > 50 ){
            return setModalText("Todo must < 50 characters!");
        }
        else if(!text.match(/^[a-zA-Z0-9ก-๏]+$/)){
            return setModalText("Todo must contains only English letters, Thai letters and numbers!")
        }
        else if(text !== ""){
            props.onSubmit(text)
            setText("")
        }
        if(props.setIsEdited){
            props.setIsEdited(false)
        }
    }

    return (
        <div>
            <Input
                placeholder={props.placeholder}
                onChange={e => setText(e.target.value)}
                value={text}
                isEdit={props.setIsEdited}
            />
            <Button
                text={props.button}
                color="#00b8a9"
                onClick={handleClick}
                float={props.setIsEdited ? "right" : ""}
            />
        </div>
    );
}

Forms.propTypes = {
    text: PropTypes.string,
    setIsEdited: PropTypes.func,

}
export default Forms;