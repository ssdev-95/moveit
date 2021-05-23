import React from  'react'

import { CountdownContainer, Timer, Digit, Button } from '@/components/Countdown/countdown.style'
import { gray_line } from 'root/colors.json'

import { useCountdown } from '@/context/CountdownContext'
import useChallenge from '@/context/ChallengesContext';

import { blue_dark, green, red, title, white } from 'root/colors.json'

export default function Countdown() {
    const { splitTime, startCountdown, resetCountdown, isActive } = useCountdown();
    const { hasChallenge } = useChallenge()

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
            {
                (!isActive && !hasChallenge)&&(
                    <Button
                    onClick={startCountdown}
                    style={{ 
                        background: `${blue_dark}`,
                        color: `${white}`
                    }} >
                        <span>Begin a cycle</span>
                        <img src="icons/arrow.svg" alt="Button icon" />
                    </Button>
                )
            }
            {
                (isActive && !hasChallenge)&&(
                    <Button
                    onClick={resetCountdown}
                    style={{ 
                        background: `${red}`,
                        color: `${white}`
                    }} >
                        <span>Abort cycle</span>
                        <img src="icons/arrow.svg" alt="Button icon" />
                    </Button>
                )
            }
            {
                (!isActive && hasChallenge)&&(
                    <Button
                      onClick={startCountdown}
                      style={{ 
                          background: `${white}`,
                          color: `${title}`,
                          borderBottom: `2px solid ${green}`
                      }} >
                        <span>Begin a cycle</span>
                        <img src="icons/arrow.svg" alt="Button icon" />
                    </Button>
                )
            }
        </CountdownContainer>
    );
}