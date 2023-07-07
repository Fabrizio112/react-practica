import { useState } from "react";

function useModal(initialValue = false) {
    const [isOpen, setIsOpen] = useState(initialValue)

    const abrirModal = () => setIsOpen(true)
    const cerrarModal = () => setIsOpen(false)

    return [isOpen, abrirModal, cerrarModal]
}

export default useModal;