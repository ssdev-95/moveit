import styled from 'styled-components'
import { title, white } from 'root/colors.json'

export const CountdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-weight: 600;
    color: ${title};
    height: 100%;
`

export const Timer = styled.div`
    height: 144px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Rajdhani';
    font-weight: 600;

    p {
        margin: 0 1.8rem;

        font-size: 7rem;
        line-height: 0;
    }
`

export const Digit = styled.div`
    height: 100%;
    width: 5rem;
    background: ${white};

    display: flex;
    align-items: center;
    justify-content: center;

    span {
        font-size: 7rem;
    }
`
export const Button = styled.button`
    width: 389px;
    height: 80px;

    display: flex;
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 6px;

    &:hover {
        filter: brightness(.87);
    }
`

// .countdownContainer > div {
//     flex: 1;

//     display: flex;
//     align-items: center;
//     justify-content: space-evenly;

//     background: #fff;
//     box-shadow: 0 0 60px rgba(0,0,0,.05);
//     border-radius: 5px;

//     font-size: 8.5rem;
//     text-align: center;
// }

// .countdownContainer > div span {
//     flex: 1;
// }

// .countdownContainer > div span:first-child {
//     border-right: 1px solid rgba(0,0,0,.05);
// }

// .countdownContainer > div span:last-child {
//     border-left: 1px solid rgba(0,0,0,.05);
// }

// .countdownContainer > span {
//     font-size: 6.25rem;
//     margin: 0 0.5rem;
// }

// .countdownButton {
//     width: 100%;
//     height: 5rem;

//     margin-top: 2rem;

//     display: flex;
//     align-items: center;
//     justify-content: center;

//     border: 0;
//     border-radius: 5px;

//     background: var(--blue);
//     color: #fff;

//     font-size: 1.25rem;
//     font-weight: 600;

//     transition: background-color .2s;
// }

// .countdownButton:not(:disabled):hover {
//     background: var(--blue-dark);
// }

// .countdownButtonActive {
//     background: #fff;
//     color: var(--title);

//     border-bottom: 2px solid var(--green);
// }

// .countdownButtonActive:not(:disabled):hover {
//     background: var(--red);
//     color: #fff;
//     border-bottom: 2px solid var(--red);
// }

// .countdownButton:disabled {
//     cursor: not-allowed;
//     background: #fff;
//     color: var(--title);
//     border-bottom: 2px solid var(--green);
// }