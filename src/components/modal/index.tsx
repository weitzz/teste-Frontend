"use client"
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
interface ModalProps {
    children: React.ReactNode
    title: string
    onClose: () => void
    onOk: () => void
}

const Modal = ({ children, title, onOk, onClose }: ModalProps) => {
    const searchParams = useSearchParams()
    const modalRef = useRef<HTMLDialogElement | null>(null)
    const showModal = searchParams.get('showModal')

    useEffect(() => {
        if (showModal === 'y') {
            modalRef.current?.showModal()
        } else {
            modalRef.current?.close()
        }
    }, [showModal])


    const closeModal = () => {
        modalRef.current?.close()
        onClose()
    }


    const clickOk = () => {
        onOk()
        closeModal()
    }

    const modal: JSX.Element | null = showModal === 'y'
        ? (
            <section ref={modalRef} className='max-w-screen-xl mx-auto px-3 backdrop:bg-slate-900'>
                <div className='bg-slate-200 w-[500px]'>
                    <div className='flex justify-between flex-row px-2'>
                        <h2>{title}</h2>
                        <button onClick={closeModal}><AiOutlineCloseCircle size={24} color="#f1c40f" /></button>
                    </div>
                    <div>{children}</div>
                    <div>
                        <button onClick={closeModal}>Fechar</button>
                    </div>
                </div>
            </section>
        ) : null


    return modal


}

export default Modal