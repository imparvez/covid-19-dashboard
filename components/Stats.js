import React from 'react';
import styled from "styled-components";

import useStats from '../utils/useStats';
import Theme from '../theme';

const StateBlockContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const StateBlock = styled.div`
    width: 25%;
    min-height: 150px;
    height: 100%;
    background-color: #f7f7f7;
    padding: 15px;
    border-bottom: 2px solid #d82138;
    display: flex;
    flex-direction: column;
`

const Title = styled.h3`
    font-size: 18px;
    font-weight: 700;
    padding-top: 10px;
    margin: 0;
`

const Values = styled.span`
    color: #d82138;
    font-size: 40px;
    font-weight: 700;
    line-height: 36px;
`

export default function Stats({ url }) {
    const { stats, loading, error } = useStats(url);

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error...</div>
    
    return (
        <Theme>
            {stats && (
                <StateBlockContainer>
                    <StateBlock>
                        <Values>{stats.confirmed.value}</Values>
                        <Title>Confirmed cases </Title>
                    </StateBlock>
                    <StateBlock>
                        <Values>{stats.deaths.value}</Values>
                        <Title>Confirmed deaths </Title>
                    </StateBlock>
                    <StateBlock>
                        <Values>{stats.recovered.value}</Values>
                        <Title>Recovered number </Title>
                    </StateBlock>
                </StateBlockContainer>
            )}
        </Theme>
    )
}