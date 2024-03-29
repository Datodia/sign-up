import React from 'react'
import styled from 'styled-components'

export const Texts = () => {
    return (
        <Container>
            <Title>Learn to code by watching others</Title>
            <Desc>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </Desc>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    margin-top: 88px;
    padding: 16px 0;
`
const Title = styled.h1`
    font-size: 28px;
    color: white;
    text-align: center;
    @media screen and (min-width: 900px){
        font-size: 50px;
        text-align: left;
    }
`
const Desc = styled.h3`
    margin-top: 20px;
    font-size: 16px;
    color: white;
    text-align: center;
    @media screen and (min-width: 900px){
        text-align: left;
    }
`
const BtnTxt = styled(Desc)`
    margin: 0;
`

const Button = styled.div`
    margin-top: 60px;
    padding: 34px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 88px;
    background-color: var(--violet);
    box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
    border-radius: 10px;
`