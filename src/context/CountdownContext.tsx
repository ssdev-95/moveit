import { createContext, useState, useEffect, useContext } from 'react';

import { CountdownContextData, ProviderProps } from '@/types'
import useChallenge from '@/context/ChallengesContext';

const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeOut: NodeJS.Timeout;

export function CountdownProvider({ children }: ProviderProps) {
    const { initChallenge } = useChallenge()

    const initTime = 10
    const [time, setTime] = useState(initTime)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)
    const [splitTime, setSplitTime] = useState<string[]>(['0', '0', '0', '0'])

    const formatTime = () => {
        const minutes = Math.floor(time/60)
        const seconds = time%60

        const minDigits = minutes>=10?String(minutes).split(''):['0', `${minutes}`]
        const secDigits = seconds>=10?String(seconds).split(''):['0', `${seconds}`]

        const neoTime = [...minDigits, ...secDigits]

        return neoTime
    }

    const startCountdown = () => {
        setIsActive(true)
    }

    const resetCountdown = () => {
        clearTimeout(countdownTimeOut)
        setIsActive(false)
        setTime(initTime)
        setHasFinished(false)
    }

    useEffect(()=>{
        if(isActive && time>0) {
            countdownTimeOut = setTimeout(()=>{
                setTime(time-1)
            }, 1000)
        } else if(isActive && time==0) {
            setHasFinished(true)
            setTime(initTime)
            resetCountdown()
            initChallenge()
        }
    }, [isActive, time])

    useEffect(()=>{
        setSplitTime(formatTime())
    }, [time])
    
    return (
        <CountdownContext.Provider value={{
            splitTime,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    );
}

export const useCountdown = () => {
    return useContext(CountdownContext)
}
