import styled from 'styled-components';

export const Container = styled.div`
    align-self: center;
    margin-top: 10vh;
    text-align: center;

    .superior {
        display: flex;
        justify-content: space-between;
        .team {
            font-size: 2.4em;
            display: flex;
            justify-content: space-between;
            span {
                width: 8vw;
                text-align: right;

                &:first-child {
                    text-align: left;
                }
            }
        }

        .vs {
            width: 8vw;
            font-size: 2.4em;
            font-weight: 300;
        }

    }

    .inferior {
        margin-top: 1vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        font-size: 1.1em;
        
        .tournament {
            margin-right: 2vw;
            font-weight: 300;
        }
    }


`;
