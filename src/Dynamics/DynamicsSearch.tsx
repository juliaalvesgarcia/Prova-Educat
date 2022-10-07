import React, { useState } from "react";
import styled from "styled-components";

type DynamicsSearchProps = {
    className?: string;
}

const DynamicsSearch = ({className}: DynamicsSearchProps) => {
    return (
        <div className={className}>
            <div className="info">
                <label>Nome</label>
                <input>Pesquisar</input>
                <label>Vigência(início)</label>
                <input>Pesquisar</input>
            </div>
        </div>
    )
}

export default styled(DynamicsSearch)`
    
`;