import React, { useEffect, useState } from 'react'
import { Header, Bar, Progress, CurrentExperience } from '@/components/Experiencebar/experiencebar.style'

import { useCookies } from 'react-cookie'

import { ExperiencBarProps } from '@/types'

export default function Experiencebar({ level }:ExperiencBarProps) {
  const [cookies, setCookie] = useCookies(['profile'])
  const { profile } = cookies
  const [ nextLevelXP, setNextLevelXP] = useState(0)
  const [progress, setProgress] = useState('0%')
    // const nextLevelXP = Math.pow((level+1)*4, 2)

    useEffect(()=>{
      setNextLevelXP(Math.pow((level+1)*4, 2))
    }, [])

    useEffect(()=>{
      setNextLevelXP(Math.pow((profile.level+1)*4, 2))
      setProgress(`${(profile.baseXP/nextLevelXP)*100}%`)
    },[profile])

    //NextLeveXP Base Calculus
    //Math.pow((userData.level+1)*4, 2)
  
  return (
    <Header>
      <span>0 xp</span>
      <Bar>
        <Progress style={{ width: progress }} />
      </Bar>
      <span>{nextLevelXP} xp</span>
      <CurrentExperience>{profile.baseXP} xp</CurrentExperience>
    </Header>
  )
}
