import React from 'react'

import { LevelUpModalContextProvider } from '@/context/LevelUpModalContext'
import { ChallengesProvider } from '@/context/ChallengesContext'
import { CountdownProvider } from '@/context/CountdownContext'
import { ProfileProvider } from '@/context/ProfileContext'

import { CookiesProvider } from 'react-cookie'
import { GlobalStyle } from '@/styles/globals.style'

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <LevelUpModalContextProvider>
        <ProfileProvider>
          <ChallengesProvider>
            <CountdownProvider>
              <GlobalStyle />
              <Component {...pageProps} />
            </CountdownProvider>
          </ChallengesProvider>
        </ProfileProvider>
      </LevelUpModalContextProvider>
    </CookiesProvider>
  )
}

export default MyApp
