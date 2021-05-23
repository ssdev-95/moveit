import React, { useEffect, useState } from 'react'
import { Header, Bar, Progress, CurrentExperience } from '@/components/Experiencebar/experiencebar.style'

import { useCookies } from 'react-cookie'

import { ExperiencBarProps } from '@/types'

export default function Experiencebar({ currentXP, level }:ExperiencBarProps) {
  const [cookies, setCookie] = useCookies(['profile'])
  const [ nextLevelXP, setNextLevelXP] = useState(Math.pow((level+1)*4, 2))
    // const nextLevelXP = Math.pow((level+1)*4, 2)

    useEffect(()=>{
      setNextLevelXP(Math.pow((level+1)*4, 2))
    }, [])

    //NextLeveXP Base Calculus
    //Math.pow((userData.level+1)*4, 2)
  
  return (
    <Header>
      <span>0 xp</span>
      <Bar>
        <Progress style={{ width: `${(currentXP/nextLevelXP)*100}%` }} />
      </Bar>
      <span>{nextLevelXP} xp</span>
      <CurrentExperience>{currentXP} xp</CurrentExperience>
    </Header>
  )
}
