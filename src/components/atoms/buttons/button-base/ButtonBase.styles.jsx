import styled from 'styled-components';

export const ButtonBase = styled.button`
    width: 50%;
    height; 50px; 
    line-height: 0;
    padding: .7rem 1rem;
    color: #fff;
    background-color: #000;
    border: 1px solid #000;
    cursor: pointer;
    transition: all .2s;

    &:hover {
        color: #000;
        background-color: #f0f0f0;
        border: 1px solid #000;
    }
`;