import React, { useState } from "react";
import styled from "styled-components";

type DynamicsTitleProps = {
    className?: string;
    title?: string;
}

const DynamicsTitle = ({className, title}: DynamicsTitleProps) => {
    return (
        <div className={className}>
            <div className="title">
                <div>
                    <h1>{title}</h1>
                </div>
                <div className="hr">
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default styled(DynamicsTitle)`
    width:100%;
    .title{
        font-style: normal;
        font-weight: 600;
        font-size: 8px;
        line-height: 22px;
        color: #A49866;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 15px;
    }  
    .hr{
        margin-left: 20px;
        width:87%;
    }
`;