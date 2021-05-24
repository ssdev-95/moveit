import styled from 'styled-components'
import { green, text_highlight, text } from 'root/colors.json'

export const Header = styled.header`
    width: 100%;
    height: 9vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 0.65rem;

    span {
        color: ${text};
        font-size: 1rem;
    }
`

export const Bar = styled.div`
    width: 50vw;
    height: .35rem;
    background: ${text_highlight};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const Progress = styled.div`
    height: 95%;
    border-radius: 6px;
    background: ${green};
`
  
export const CurrentExperience  = styled.span`
    position: absolute;
    top: 32px;
    transform: translateX(-50%);
`
  