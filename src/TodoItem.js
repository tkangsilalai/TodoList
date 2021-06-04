import styled from "styled-components";
import Button from "./Button";
import React, { useState } from "react";
import Forms from "./Forms";

const Item = styled.div`
    margin-top: 1%;
    border: 1px solid;
    border-radius: 10px;
    padding: 1%;
    width: 65%;
    height: 3em;
    text-align: left;
`
const TextDiv = styled.p`
    font-size: 2em;
    display: inline;
`

const ButtonDiv = styled.div`
    float: right;
    display: inline;
`

function TodoItem(props) {

    const [isEdited, setIsEdited] = useState(false)
    // const [text, setText] = useState(props.text)

    function handleDelete() {
        props.onDelete(props._id)
    }

    function handleEdit() {
        setIsEdited(true)
    }

    function handleUpdate(item) {
        props.onUpdate(item, props._id)
    }

    return (
        <Item>
            {!isEdited
                ?
                <>
                    <TextDiv>
                        {props.text}
                    </TextDiv>
                    <ButtonDiv>

                        <Button
                            text="Edit"
                            color="#99ddcc"
                            onClick={handleEdit}
                        />
                        <Button
                            text="Delete"
                            color="#f6416c"
                            onClick={handleDelete}
                        />
                    </ButtonDiv>
                </>
                :
                <Forms
                    onSubmit={handleUpdate}
                    text={props.text}
                    button="Update"
                    setIsEdited={setIsEdited}
                />
            }
        </Item>
    );
}

export default TodoItem;