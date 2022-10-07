import React, { useState } from "react";
import styled from "styled-components";

type DynamicsFilterProps = {
    className?: string;
}

const DynamicsFilter = ({className}: DynamicsFilterProps) => {
    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className="nome-div">
                        <div style={{display: "flex", justifyContent: "flex-start"}}>
                            <label>Nome</label>
                        </div>
                        <div>
                            <input></input>
                        </div>
                    </div>
                    <div>
                        <div style={{display: "flex", justifyContent: "flex-start"}}>
                            <label>CPF</label>
                        </div>
                        <div>
                            <input></input>
                        </div>
                    </div>
                    <div>
                        <div style={{display: "flex", justifyContent: "flex-start"}}>
                            <label>Titulação</label>
                        </div>
                        <div>
                            <input></input>
                        </div>
                    </div>
                </div>
                <div className="row inf2">
                    <div className="nome-div">
                        <div style={{display: "flex", justifyContent: "flex-start"}}>
                            <label>Data</label>
                        </div>
                        <div>
                            <input></input>
                        </div>
                    </div>
                    <div>
                        <div style={{display: "flex", justifyContent: "flex-start"}}>
                            <label>Vigência(ínicio)</label>
                        </div>
                        <div>
                            <input></input>
                        </div>
                    </div>
                    <div>
                        <div style={{display: "flex", justifyContent: "flex-start"}}>
                            <label>Vigência(final)</label>
                        </div>
                        <div>
                            <input></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default styled(DynamicsFilter)`
width: 100%;
margin-bottom: 30px;
border: 1px solid #EAEAEA;
border-radius: 7px;
.container{
    padding: 40px;
}
.row{
    display: grid;
    grid-template-columns: auto auto auto;
    width: 100%;
}
.nome-div{
width: 100%;
}
.inf2{
    margin-top: 30px;
}
input{
    width: 96%;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    line-height: 20px;
    margin-top: 10px;
}
`;