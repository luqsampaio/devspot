"use client"
import styled from "styled-components";

export default function Logo(){
    return(
        <>
            <LogoText>DevSpot</LogoText>
        </>
    )
}
const LogoText = styled.h1`
    text-align: center;
    font-family: Noto Sans;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 2.2px;
    background: linear-gradient(90deg, rgba(0, 6, 161, 0.91) 0%, rgba(5, 225, 255, 0.93) 80.52%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
