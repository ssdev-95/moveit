import React from  'react'

import { CountdownContainer, Timer, Digit, Button } from '@/components/Countdown/countdown.style'
import { gray_line } from 'root/colors.json'

export default function Countdown() {

    return (
        <CountdownContainer>
            <Timer>
                <Digit style={{ borderRight:`1px solid ${gray_line}` }} >
                    <span>0</span>
                </Digit>
                <Digit style={{ borderLeft:`1px solid ${gray_line}` }} >
                    <span>0</span>
                </Digit>
                <p>:</p>
                <Digit style={{ borderRight:`1px solid ${gray_line}` }} >
                    <span>0</span>
                </Digit>
                <Digit style={{ borderLeft:`1px solid ${gray_line}` }} >
                    <span>0</span>
                </Digit>
            </Timer>
            <Button>
                <span>Begin a cycle</span>
                <img src="icons/arrow.svg" alt="Button icon" />
            </Button>
        </CountdownContainer>
    );
}