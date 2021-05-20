import { createGlobalStyle } from 'styled-components'

import { LevelUpModalContextProvider } from '@/context/LevelUpModalContext'
import { ChallengesProvider } from '@/context/ChallengesContext'

import { background, text } from 'root/colors.json'
import React from 'react'
import { ProfileProvider } from '@/context/ProfileContext'

import { CookiesProvider } from 'react-cookie'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    width: 100vw;
    height: 100vh;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: ${background};
    color: ${text};
  }

  body, input, textarea, button {
    font: 400 1rem "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <LevelUpModalContextProvider>
        <ChallengesProvider>
          <ProfileProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </ProfileProvider>
        </ChallengesProvider>
      </LevelUpModalContextProvider>
    </CookiesProvider>
  )
}

export default MyApp
