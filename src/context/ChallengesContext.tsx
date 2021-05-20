import { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios'

import { ChallengesContextData, ChallengesProviderProps, Challenge } from '@/types'

const ChallengesContext = createContext({} as ChallengesContextData);

export const  ChallengesProvider = ({ children}: ChallengesProviderProps) => {
    const [challenge, setChallenge] = useState<Challenge>({})
    const [hasChallenge, setHasChallenge] = useState(false)
    // const types = [
    //     "busywork",
    //     "charity",
    //     "cooking",
    //     "diy",
    //     "education",
    //     "music",
    //     "recreational",
    //     "relaxation",
    //     "social"
    // ]

    const parseChallenge = async () => {
        const uri = process.env.API_URI

        const { data } = await axios.get(uri)

        const challenge:Challenge = {
            amount: (Number(data.accessibility)+Number(data.price))*100,
            description: data.activity,
            uuid: data.key,
            type: data.type,
            pic: `icons/${data.type}.svg`
        }
        
        setChallenge(challenge)
    }

    useEffect(()=>{
        parseChallenge()
        setHasChallenge(!hasChallenge)
    }, [])

    return (
        <ChallengesContext.Provider
          value={{
              hasChallenge,
              challenge,
              parseChallenge
          }}>
            { children }
        </ChallengesContext.Provider>
    );
}

export default function useChallenge() {
    return useContext(ChallengesContext)
}
