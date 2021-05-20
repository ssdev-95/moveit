import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import Experiencebar from '@/components/Experiencebar'
import Dashboard from '@/components/Dashboard';
import LevelUPModal from '@/components/LevelUpModal';

import useModal from '@/context/LevelUpModalContext';

import { HomeProps } from '@/types'

import { Container } from '@/pages/home.style'

export default function Home(props: HomeProps) {
  const { isLevelUp } = useModal()

  return (
    <Container>
      {
        isLevelUp && <LevelUPModal />
      }
      <Head>
        <title>Move.it</title>
      </Head>
      <Experiencebar />
      <Dashboard />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  return {
    props: {}
  }
}
