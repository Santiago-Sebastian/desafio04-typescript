import styled from 'styled-components';


export const InputContainer = styled.div`
    width: 90%;
    height: 42px;
    color: #6a6e81;

    border: 1px solid #f5f7fa;
    border-radius: 21px;
    overflow: hidden;
    padding: 0 10px;
    
    & input {
        width: 100%;
        height: 42px;
        border-radius: 21px;
        background-color: transparent;
        border: 0;
        outline: none;
    }

`

export const ErrorMessage = styled.p`
    color: #AAFF00;
    font-size:13px;
    margin: 10px;
    width: 40%;
    text-align: left;

`