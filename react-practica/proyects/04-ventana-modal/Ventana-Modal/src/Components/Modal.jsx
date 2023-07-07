function Modal({ children, isOpen, cerrarModal }) {
    return (
        <section className={`modal ${isOpen && "is-open"}`}>
            < div className="modal-container" >
                <button onClick={cerrarModal} className="modal-close">X</button>
                {children}
            </div >
        </section >);
}

export default Modal;