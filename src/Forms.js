import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const Input = styled.input`
    font-size: 1.5em;
    text-align: left;
    width: ${props => props.isEdit ? "60%": "40%"};
    margin-bottom: 2%;
    border-radius: 3px;
    padding: 10px;
`

function Forms(props) {

    const [text, setText] = useState(props.text);

    function handleClick(){
        if(text !== ""){
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

export default Forms;