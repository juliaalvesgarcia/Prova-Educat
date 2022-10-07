import React, { useState } from "react";
import styled from "styled-components";

type DynamicsInputProps = {
    className?: string;
    children?: string;
    placeholder?: string;
    onChange?: any;
    name?: string;
    onClick?: any;
    value?: string | number;
    type?: "text" | "number" |"email" |"password" | undefined;
    label?: string;
}

const DynamicsInput = ({
    className,
    children,
    type,
    placeholder,
    value,
    onChange,
    onClick,
    name,
    label
}: DynamicsInputProps) => {
    return(
        <div className={className}>
            <h5>{label}</h5>
            <input
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
                onClick={onClick}
                name={name}>
                    {children}
                </input>
        </div>
    );
};

export default styled(DynamicsInput)`
    width: 100%;

    > input{
        background-color: #e5e5e5;
        padding: 8px 12px;

        border: 2px solid black;
        border-radius: 12px;

        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }

    > h5{
        margin-top: 30px;
        margin-bottom: 10px;
        font-size: 15px;
        font-weight: 300;
    }
`;