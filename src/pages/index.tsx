import { Profile } from '../components/Profile';
import { Experiencebar } from '../components/Experiencebar';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';

import { CountdownProvider } from '../context/CountdownContext';
import { ChallengesProvider } from '../context/ChallengesContext';

import { GetServerSideProps } from 'next';

import Head from 'next/head';

import style from '../styles/pages/Home.module.css';

interface HomeProps {
  level: number;
  currentXp: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  //console.log(props)
  return (
    <ChallengesProvider
    level={props.level}
    currentXp={props.currentXp}
    challengesCompleted={props.challengesCompleted}
    >
      <div className={style.container}>
        <Head>
          <title>Init | move.it</title>
        </Head>
        <Experiencebar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
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
