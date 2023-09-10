"use client"
import styled from "styled-components";

export default function NavBar() {
    return (
        <Div>
        <Div2>
            <Div3/>
            <Div4/>
            <Div5/>
        </Div2>
        </Div>
    )
}

const Div = styled.div`
  width: 100%;
  max-width: 130px;
  display: flex;
  flex-direction: column;
`;

const Div2 = styled.div`
  width: 100%;
  max-width: 30px;
  margin-top: 6px;
  padding-top: 6px;
  padding-left: 2px;
  padding-right: 2px;
  padding-bottom: 5px;
  align-self: end;
  display: flex;
  flex-direction: column;
`;

const Div3 = styled.div`
  background: #ececec;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  min-height: 3px;
`;

const Div4 = styled.div`
  background: #ececec;
  margin-top: 5px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  min-height: 3px;
`;

const Div5 = styled.div`
  background: #ececec;
  margin-top: 5px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  min-height: 3px;
`;