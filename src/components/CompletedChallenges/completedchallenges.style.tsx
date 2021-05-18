import styled from 'styled-components'
import { gray_line } from 'root/colors.json'

export const CompletedChallengesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${gray_line};

    font-weight: 500;
`

// .completedChallengesContainer span:first-child {
//     font-size: 1.5rem;
// }

// .completedChallengesContainer span:last-child {
//     font-size: 1rem;
// }