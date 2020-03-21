import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
import GlobalStyle from '../theme/globalStyle';
import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 1240px;
    width: 100%;
    margin: 25px auto 0;
`

const Header = styled.h2`
    margin: 30px 0 20px;
    padding-bottom: 10px;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: normal;
    border-bottom: solid 1px #e8e8e8;
`

export default function IndexPage() {
    return (
        <Wrapper>
            <Header>Coronavirus disease (COVID-19) outbreak situation</Header>
            <Stats url='https://covid19.mathdro.id/api'/>
            <CountrySelector />
            <GlobalStyle />
        </Wrapper>
    );
}