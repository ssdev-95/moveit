import styled from 'styled-components'
import { white } from 'root/colors.json'

export const ChallengeContainer = styled.div`
    width: 468px;
    height: 500px;
    border-radius: 6px;
    background: ${white};
    padding: 3rem 2rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    img {
        height: 6rem;
    }

    span:first-child {
        font-size: 1.5rem;
        font-weight: 500;
        width: 226px;
        text-align: center;
    }

    span:last-child {
        font-size: 1rem;
        font-weight: 400;
        width: 226px;
        text-align: center;
    }
`
