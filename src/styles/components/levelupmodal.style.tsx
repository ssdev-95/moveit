import styled from 'styled-components'
import { half_black , half_white, red, white, blue, blue_dark, blue_twitter } from 'root/colors.json'

export const Overlay = styled.div`
    background: ${half_white};
    position: absolute;

    top:0;
    left:0;

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Modal = styled.div`
    background-image: url('icons/levelup.svg');
    background-repeat: no-repeat;
    background-position: 52% 25%;
    background-color: ${white};

    height: 364px;
    width: 397px;
    max-width: 90%;

    padding: 2rem 3rem;

    border-radius: 10px;
    box-shadow: 0 0 60 ${half_black};
    text-align: center;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h6 {
        color:${blue};
        font-size: 6rem;
    }

    button {
        background: ${blue_twitter};

        width: 297px;
        height: 50px;

        display: flex;
        gap: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        border-radius: 6px;

        &:hover {
            background: ${blue_dark};
        }
        
        span {
            color: white;
        }
    }

    p {
        position: absolute;
        top: 1.48rem;
        right: 1.68rem;
        font-family: 'Rajdhani';
        font-size: 1.18rem;
        cursor: pointer;

        &:hover {
            color: ${red};
        }
    }
`
