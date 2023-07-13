import { reset, restar, restar5, sumar, sumar5 } from "../actions/contadorActions";

function ContadorRedux() {
    return (
        <>
            <h2>Contador Redux</h2>
            <nav>
                <button onClick={sumar5}>+5</button>
                <button> onClick={sumar}+</button>
                <button onClick={reset}>0</button>
                <button onClick={restar}>-</button>
                <button onClick={restar5}>-5</button>
            </nav>
        </>);
}

export default ContadorRedux;