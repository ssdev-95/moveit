import styled from 'styled-components'
import { text } from 'root/colors.json'

export const ProfileContainer = styled.div`
    width: 468px;
    height: 500px;
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    gap: .75rem;
`

export const Avatar = styled.div`
    width: 100%;
    display: flex;

    gap: 1rem;

    img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50px;
    }

    div {
        display: flex;
        flex-direction: column;
        margin-top: 0.35rem;
        gap: .25rem;
        height: 100%;
        span {
            color: ${text};
            font-weight: bold;
            font-size: 1.45rem;
        }

        div {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            margin-top: 0;

            gap: .45rem;
            width: 100%;
            img {
                height: 12px;
                width: 12px;
            }
            span {
                font-size: .8rem;
                font-weight: normal;
            }
        }
    }
`
