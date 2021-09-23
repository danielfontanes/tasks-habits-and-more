import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: #AE7742;
`

const Task = () => {
    return (
        <StyledDiv>
            <h3>Portfolio</h3>
            <ol>
                <li>Estructurar presentacion</li>
                <li>Estructurar tecnologías</li>
                <li>Estructurar proyectos</li>
            </ol>
        </StyledDiv>
    );
}

export default Task;
