import React from "react";
import styled from "styled-components";

type MainHeaderProps = {
    className?: string;
    children?: any;
}

const MainHeader = ({className, children}: MainHeaderProps) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default styled(MainHeader)`
    height: 100%;
    width: 100%;
    grid-area: MH;
    background: linear-gradient(269.08deg, #4C7DAB 0.97%, #5CB0AD 99.4%);
`;