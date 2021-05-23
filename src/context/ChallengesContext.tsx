import { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios'

import { ChallengesContextData, ProviderProps, Challenge } from '@/types'

// import useModal from '@/context/LevelUpModalContext';
// import useProfile from '@/context/ProfileContext'
// import { useCookies } from 'react-cookie';

const ChallengesContext = createContext({} as ChallengesContextData);

export const  ChallengesProvider = ({ children}: ProviderProps) => {
    const [challenge, setChallenge] = useState<Challenge>({})
    const [hasChallenge, setHasChallenge] = useState(false)
    
    // const { upALevel } = useModal()
    // const [ cookies, setCookie ] = useCookies(['user'])
    // const user = cookies.user

    const parseChallenge = async () => {
        const uri = process.env.API_URI

        const { data } = await axios.get(uri)

        const challenge:Challenge = {
            amount: Math.floor((Number(data.accessibility)+Number(data.price))*100),
            description: data.activity,
            uuid: data.key,
            type: data.type,
            pic: `icons/${data.type}.svg`
        }
        
        setChallenge(challenge)
    }

    const handleChallengeEnd = (XPEarned:number, isChallengeCompleted:boolean) => {
        let finalXP:number = 100

        setChallenge({})
        setHasChallenge(false)
        
        // if(finalXP>=user.nextLevelXP) {
        //     finalXP = finalXP-user.nextLevelXP
        //     // upALevel()
        // } else {
        //     finalXP = userXP+XPEarned
        // }
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
