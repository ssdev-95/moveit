import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import Experiencebar from '@/components/Experiencebar'
import Dashboard from '@/components/Dashboard';
import LevelUPModal from '@/components/LevelUpModal';

import useModal from '@/context/LevelUpModalContext';

import { HomeProps } from '@/types'

import { Container } from '@/pages/home.style'

export default function Home({ user }: HomeProps) {
  const { isLevelUp } = useModal()
  
  console.log(user)

  const { currentXP, nextLevelXP } = user

  return (
    <Container>
      {
        isLevelUp && <LevelUPModal />
      }
      <Head>
        <title>Move.it</title>
      </Head>
      <Experiencebar currentXP={currentXP} nextLevelXP={nextLevelXP} />
      <Dashboard user={user} />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { user } = ctx.req.cookies

  return {
    props: {
      user
    }
  }
}
