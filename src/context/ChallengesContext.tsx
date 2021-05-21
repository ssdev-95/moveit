import { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios'

import { ChallengesContextData, ChallengesProviderProps, Challenge } from '@/types'
import useModal from '@/context/LevelUpModalContext';
import useProfile from '@/context/ProfileContext'

import { useCookies } from 'react-cookie';

const ChallengesContext = createContext({} as ChallengesContextData);

export const  ChallengesProvider = ({ children}: ChallengesProviderProps) => {
    const [challenge, setChallenge] = useState<Challenge>({})
    const [hasChallenge, setHasChallenge] = useState(false)
    const [completedChallenges, setCompletedChallenges] = useState(0)
    const [userXP, setUserXP] = useState(0)

    const { updateProfile } = useProfile()
    const { upALevel, currentLevel } = useModal()
    const [ cookies, setCookie ] = useCookies(['user'])
    const user = cookies.user

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
        let finalXP:number

        setChallenge({})
        setHasChallenge(false)
        
        if(finalXP>=user.nextLevelXP) {
            finalXP = finalXP-user.nextLevelXP
            upALevel()
        } else {
            finalXP = userXP+XPEarned
        }
        
        setUserXP(finalXP)

        if(isChallengeCompleted) {
            setCompletedChallenges(completedChallenges+1) 
        } else {
            setCompletedChallenges(completedChallenges+0)
        }
    }

    const initChallenge = () => {
        parseChallenge()
        setHasChallenge(true)
    }

    useEffect(()=>{
        updateProfile(currentLevel, userXP, completedChallenges)
    }, [userXP, currentLevel, completedChallenges])

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
