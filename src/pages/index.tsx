import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import Experiencebar from '@/components/Experiencebar'
import Dashboard from '@/components/Dashboard';
import LevelUPModal from '@/components/LevelUpModal';

import useModal from '@/context/LevelUpModalContext';
import useProfile from '@/context/ProfileContext';

import { HomeProps } from '@/types'

import { Container } from '@/styles/home.style'
// 
export default function Home({ user }: HomeProps) {
  const { isLevelingUp } = useModal()
  const { userData } = useProfile()

  return (
    <Container>
      {
        isLevelingUp && <LevelUPModal />
      }
      <Head>
        <title>Move.it</title>
      </Head>
      <Experiencebar />
      <Dashboard user={user || userData} />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { profile } = ctx.req.cookies
  const user = {
    name: 'Salomao Souza',
    avatar: 'https://github.com/xSallus.png',
    level: 1,
    baseXP: 0,
    nextLevelXP: 16,
    completedChallenges: 0
  }

  console.log(profile)

  return {
    props: {
      user: user
    }
  }
}
