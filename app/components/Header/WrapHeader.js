"use client"
import styled from "styled-components";
import Logo from "./Logo";
import NavBar from "./Nav-icon";

export default function Header(props) {
  return (
    <Div2>
        <Div1>
            <Logo/>
            <NavBar/>
        </Div1>
        <DivRect>
            <PageTextName>{props.text}</PageTextName>
        </DivRect>
    </Div2>
  )
}

const Div1 = styled.div`
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 24rem;
    display: inline-flex;
    gap: 20px;
    flex-wrap: wrap;
`;

const Div2 = styled.div`
    width: 100%;
    max-width: 24rem;
    display: flex;
    flex-direction: column;
`;

const DivRect = styled.div`
    width: 24rem;
    height: 5rem;
    background-color: #2563eb;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PageTextName = styled.div`
    color: #fff;
    text-align: center;
    font-family: Noto Sans, -apple-system, Roboto, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 3px;
    font-size: 27px;
    width: 100%;
    max-width: 90px;
    margin-left: -5px;
  `;