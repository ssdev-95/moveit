import { useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import Experiencebar from '@/components/Experiencebar'
import Dashboard from '@/components/Dashboard';

import { HomeProps } from '@/types'

import { Container } from '@/pages/home.style'

export default function Home(props: HomeProps) {
  const [isLevelUp, setIsLevelUp] = useState(true)

  return (
    <Container>
        <Head>
          <title>Move.it</title>
        </Head>
        <Experiencebar />
        <Dashboard />
      </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentXp, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentXp: Number(currentXp),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
