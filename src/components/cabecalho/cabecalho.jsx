import styles from './Cabecalho.module.css';

const Cabecalho = () => {
    return(
        <div className={styles.cabecalho}>
            <h1><span>Todo</span> List</h1>
        </div>
    )
}

export {Cabecalho};