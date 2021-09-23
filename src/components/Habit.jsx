import React from 'react';
import styled from 'styled-components'

const SyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid 1px #46510B;
    background-color: #7E9F1A;
    padding:4px;
`
const SyledH3 = styled.h3`
   margin: 0px;
   text-transform: capitalize;
`
const SyledInput = styled.input`
   height:18px;
   width:18px;
   margin:0px 6px;
`


const Habit = ({name}) => {
    return (
        <SyledDiv>
            <SyledH3>{name}</SyledH3>
            <SyledInput type="checkbox"/> 
        </SyledDiv>
    );
}

export default Habit;
