import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    

    .mainLogo {
        width: 100%;
        max-width: 120px;
        height: auto;
        margin-top: 5vh;
    }

    .nextGame {
        flex: 1;
        margin-top: 5vh;
        h2 {
            font-size: 40px;
            font-weight: 200;
            letter-spacing: 10px;
        }
    }

    .mainSponsors{
        justify-self: baseline;
        margin-bottom: 5vh;
    }

`;
