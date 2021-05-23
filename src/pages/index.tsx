import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import Experiencebar from '@/components/Experiencebar'
import Dashboard from '@/components/Dashboard';
import LevelUPModal from '@/components/LevelUpModal';

import useModal from 'root/src/components/context/LevelUpModalContext';
import useProfile from 'root/src/components/context/ProfileContext';

import { HomeProps } from '@/types'

import { Container } from '@/pages/home.style'
// 
export default function Home({ user }: HomeProps) {
  const { isLevelingUp } = useModal()
  const { userData } = useProfile()

  // const { currentXP, nextLevelXP } = user

  return (
    <Container>
      {
        isLevelingUp && <LevelUPModal />
      }
      <Head>
        <title>Move.it</title>
      </Head>
      <Experiencebar currentXP={user.baseXP} level={user.level} />
      <Dashboard user={user} />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { profile } = ctx.req.cookies

  return {
    props: {
      user: JSON.parse(profile)
    }
  }
}
