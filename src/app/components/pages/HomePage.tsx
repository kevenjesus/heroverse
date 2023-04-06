'use client'

import Button from "@/app/DesignSystem/Button"
import Modal from "@/app/DesignSystem/Modal"
import { useState } from "react"

export default function HomePage() {
    const [modal, setModal] = useState(false)
    return (
        <>
        <Button onClick={() => setModal(true)} variant="primary">modal</Button>
       <Modal title="Modal title" open={modal} onClose={() => setModal(false)} onClosed={() => console.log('fechou')}>
            <Button variant="secondary">botao</Button>
       </Modal>
       </>
    )
}
  