import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';

interface CountdownContextData {
    minutes:number;
    seconds:number;
    hasFinished:boolean;
    isActive:boolean;
    startCountdown:() => void;
    resetCountdown:() => void;
}

interface CountdownProviderProps {
    children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout

export function CountdownProvider({ children }: CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext)

    const initTime = .25*60

    const [time, setTime] = useState(initTime)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, sethasFinished] = useState(false)

    const minutes = Math.floor(time/60);
    const seconds = time%60;

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(initTime)
        sethasFinished(false)
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
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    );
}