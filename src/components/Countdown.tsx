import {useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import style from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
    const { startNewChallenge } = useContext(ChallengesContext)

    const initTime = .25*60

    const [time, setTime] = useState(initTime)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, sethasFinished] = useState(false)

    const minutes = Math.floor(time/60);
    const seconds = time%60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(initTime)
    }

    useEffect(() => {
        if(isActive && time>0) {
            countdownTimeout=setTimeout(() => {
                setTime(time-1)
            }, 1000)
        } else if(isActive && time==0) {
            sethasFinished(true)
            setTime(initTime)
            resetCountdown()
            startNewChallenge()
        }
    }, [isActive, time])

    return (
        <div>
            <div className={style.countdownContainer}>
                <div>
                    <span>{ minuteLeft }</span>
                    <span>{ minuteRight }</span>
                </div>
                <span>:</span>
                <div>
                    <span>{ secondLeft }</span>
                    <span>{ secondRight }</span>
                </div>
            </div>
            {hasFinished ? (
                <button
                disabled
                className={style.countdownButton}>
                    Cycle finished!
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button 
                        type="button" 
                        className={`${style.countdownButton} ${style.countdownButtonActive}`}
                        onClick={resetCountdown}>
                            Abort Cycle
                        </button>
                    ) : (
                        <button 
                        type="button" 
                        className={style.countdownButton}
                        onClick={startCountdown}>
                            Begin Cycle
                        </button>
                    )}
                </>
            )}
            
        </div>
    );
}