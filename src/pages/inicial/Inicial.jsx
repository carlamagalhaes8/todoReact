import { FormCriarTarefa, ListaTarefas } from "../../components";

import styles from './Inicial.module.css';

const Inicial = () => {
    
    return(
        <div className={styles.inicial}>
            <FormCriarTarefa />
            <ListaTarefas />
        </div>
    )
}

export {Inicial};