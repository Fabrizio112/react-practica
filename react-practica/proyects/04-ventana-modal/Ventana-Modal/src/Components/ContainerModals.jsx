import useModal from "../hooks/useModal";
import Modal from "./Modal";

function ContainerModals() {
    const [isOpen1, abrirModal1, cerrarModal1] = useModal(false)
    const [isOpen2, abrirModal2, cerrarModal2] = useModal(true)
    const [isOpen3, abrirModal3, cerrarModal3] = useModal(false)
    return (
        <>
            <h1>Ventanas Modales </h1>
            <button onClick={abrirModal1}>Abrir Modal 1</button>
            <Modal isOpen={isOpen1} cerrarModal={cerrarModal1}>
                <h2>Modal 1</h2>
                <p>Este es el contenido de la modal 1</p>
                <img src="http://via.placeholder.com/640x360" alt="" />
            </Modal>
            <button onClick={abrirModal2}>Abrir Modal 2</button>
            <Modal isOpen={isOpen2} cerrarModal={cerrarModal2}>
                <h2>Modal 2</h2>
                <p>Este es el contenido de la modal 2</p>
                <img src="http://via.placeholder.com/640x360" alt="" />
            </Modal>
            <button onClick={abrirModal3}>Abrir Modal 3</button>
            <Modal isOpen={isOpen3} cerrarModal={cerrarModal3}>
                <h2>Modal 3</h2>
                <p>Este es el contenido de la modal 3</p>
                <img src="http://via.placeholder.com/640x360" alt="" />
            </Modal>
        </>
    );
}

export default ContainerModals;