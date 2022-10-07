import React from "react";
import styled from "styled-components";

type AsideProps = {
    className?: string;
    children?: any;
}

const Aside = ({className, children}: AsideProps) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
};

export default styled(Aside)`
    height: 100%;
    width: 100%;
    grid-area: AS;
    border-right: 22px solid blue;
    background: #FFFFFF;
`;