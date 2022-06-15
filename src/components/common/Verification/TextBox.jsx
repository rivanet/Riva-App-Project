import { Input, Grid, setRef } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactInputVerificationCode from "react-input-verification-code";

const TextBox = () => {
    const StyledReactInputVerificationCode = styled.div`
        display: flex;
        justify-content: space-between;

        --ReactInputVerificationCode-itemWidth: calc(100% / 6 - 16px);
        --ReactInputVerificationCode-itemHeight: 55px;

        .ReactInputVerificationCode__item {
        font-size: 20px;
        font-weight: 500;
        background: rgba(112,112,112,0.1);
        font-family: "Poppins", sans-serif;
        background-color: rgba($color: #fff, $alpha: 0.029999999329447746);
        color: #fff !important;
            ${({ isInvalid }) => (isInvalid ? "#EF6C65" : "rgba(28, 30, 60, 0.4)")};
        border-radius: 4px;
        box-shadow: none;
        }

        .ReactInputVerificationCode__item.is-active {
        box-shadow: none;
        border: 1px solid #36c6d9;
        }
    `;

    return(
        <StyledReactInputVerificationCode key={1}>
            <VerificationComponent />
        </StyledReactInputVerificationCode>
    )
}

const VerificationComponent = (props) => {
    const [value, setValue] = useState("");
    return(
        <ReactInputVerificationCode 
            value={value}
            placeholder={null}
            length={6}
            onChange={(e)=>{setValue(e)}}
            />
    );
}

export default TextBox;
