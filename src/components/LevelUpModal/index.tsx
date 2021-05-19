import React from 'react'

import { Modal, Overlay } from '@/components/LevelUpModal/levelupmodal.style'

export default function LevelUPModal() {
    return (
        <Overlay>
            <Modal>
                <p>x</p>
                <h6>1</h6>
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