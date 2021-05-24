import React from 'react'

import useModal from '@/context/LevelUpModalContext';
import useProfile from '@/context/ProfileContext'

import { Modal, Overlay } from '@/styles/components/levelupmodal.style'

export default function LevelUPModal() {
    const { toggleLevelUpModal } = useModal()

    const { userData:{level} } = useProfile()

    return (
        <Overlay>
            <Modal>
                <p onClick={toggleLevelUpModal}>x</p>
                <h6>{level}</h6>
                <span>Congratulations</span>
                <span>You've reached a new level.</span>
                <button>
                    <span>Share on twitter</span>
                    <img src="icons/twitter.svg" alt="Twitter icon" />
                </button>
            </Modal>
        </Overlay>
    );
}