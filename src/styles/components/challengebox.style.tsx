import styled from 'styled-components'
import { white, blue, red, green, gray_line } from 'root/colors.json'

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
    gap: 1rem;

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

export const Header = styled.header`
    width: 100%;
    margin-top: -2rem;
    padding-bottom: 1.75rem;
    display: flex;

    align-items: center;
    justify-content: center;

    border-bottom: 1px solid ${gray_line};

    span {
        color: ${blue};
        font-size: 2rem;
    }
`

export const ChallengeDetail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Actions = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    button {
        width: 110px;
        height: 40px;
        color: white;
        border-width: 0;
        border-radius: 4px;

        &:first-child {
            background: ${red}
        }

        &:last-child {
            background: ${green};
        }

        &:hover {
            filter: brightness(.89);
        }
    }
`