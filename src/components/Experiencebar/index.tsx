import React, { useEffect, useState } from 'react'
import { Header, Bar, Progress, CurrentExperience } from '@/components/Experiencebar/experiencebar.style'

import { useCookies } from 'react-cookie'

import useProfile from '@/context/ProfileContext';

export default function Experiencebar() {
  const [cookies, setCookie] = useCookies(['profile'])
  const { profile } = cookies
  const [progress, setProgress] = useState('0%')
  const { userData } = useProfile()

  const xp= profile ? profile.baseXP : userData.baseXP
  const nextXP= profile ? profile.nextLevelXP : userData.nextLevelXP

    useEffect(()=>{
      setProgress(`${(xp/nextXP)*100}%`)
    },[profile, userData])

    //NextLeveXP Base Calculus
    //Math.pow((userData.level+1)*4, 2)
  
  return (
    <Header>
      <span>0 xp</span>
      <Bar>
        <Progress style={{ width: progress }} />
      </Bar>
      <span>{nextXP} xp</span>
      <CurrentExperience>{xp} xp</CurrentExperience>
    </Header>
  )
}
