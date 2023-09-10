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
    margin-top: 8px;
    margin-left: 3px;
    display: flex;
    flex-direction: column;
    @media (max-width: 991px) {
        margin-left: 3px;
        margin-right: 3px;
    }
    background: linear-gradient(90deg, rgba(0, 6, 161, 0.91) 0%, rgba(5, 225, 255, 0.93) 80.52%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;




