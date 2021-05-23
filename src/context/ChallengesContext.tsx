import { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios'

import { ChallengesContextData, ProviderProps, Challenge } from '@/types'

import useProfile from '@/context/ProfileContext'

const ChallengesContext = createContext({} as ChallengesContextData);

export const  ChallengesProvider = ({ children}: ProviderProps) => {
    const [challenge, setChallenge] = useState<Challenge>({})
    const [hasChallenge, setHasChallenge] = useState(false)
    
    const { xpUP, completeChallenge } = useProfile()

    const parseChallenge = async () => {
        const uri = process.env.API_URI

        const { data } = await axios.get(uri)
        const {} = ''

        const challenge:Challenge = {
            amount: Math.floor((Number(data.accessibility)+Number(data.price))*100),
            description: data.activity,
            uuid: data.key,
            type: data.type,
            pic: `icons/${data.type}.svg`
        }
        
        setChallenge(challenge)
    }

    const handleChallengeEnd = (isChallengeCompleted:boolean, XPEarned?:number) => {
        setChallenge({})
        setHasChallenge(false)
        completeChallenge()
        
        isChallengeCompleted ?
            xpUP(XPEarned)   :
            xpUP(0)
    }

    const initChallenge = () => {
        parseChallenge()
        setHasChallenge(true)
    }

    return (
        <ChallengesContext.Provider
          value={{
              hasChallenge,
              challenge,
              initChallenge,
              handleChallengeEnd
          }}>
            { children }
        </ChallengesContext.Provider>
    );
}

export default function useChallenge() {
    return useContext(ChallengesContext)
}
