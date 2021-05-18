import { GetServerSideProps } from 'next';
import Head from 'next/head';

import Experiencebar from '@/components/Experiencebar'

import { HomeProps } from '@/types'

import { Container } from '@/pages/home.style'

export default function Home(props: HomeProps) {
  return (
      <Container>
        <Head>
          <title>Move.it</title>
        </Head>
        <Experiencebar />
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
