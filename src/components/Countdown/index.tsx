import React from  'react'

import { CountdownContainer, Timer, Digit, Button } from '@/components/Countdown/countdown.style'
import { gray_line } from 'root/colors.json'

import { useCountdown } from 'root/src/context/CountdownContext'

export default function Countdown() {
    const { splitTime, startCountdown } = useCountdown();

    return (
        <CountdownContainer>
            <Timer>
                <Digit style={{ borderRight:`1px solid ${gray_line}` }} >
                    <span>{splitTime[0]}</span>
                </Digit>
                <Digit style={{ borderLeft:`1px solid ${gray_line}` }} >
                    <span>{splitTime[1]}</span>
                </Digit>
                <p>:</p>
                <Digit style={{ borderRight:`1px solid ${gray_line}` }} >
                    <span>{splitTime[2]}</span>
                </Digit>
                <Digit style={{ borderLeft:`1px solid ${gray_line}` }} >
                    <span>{splitTime[3]}</span>
                </Digit>
            </Timer>
            <Button onClick={startCountdown}>
                <span>Begin a cycle</span>
                <img src="icons/arrow.svg" alt="Button icon" />
            </Button>
        </CountdownContainer>
    );
}