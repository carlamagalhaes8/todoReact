import { CampoTexto, Botao } from "../../components";

import styles from './FormCriarTarefa.module.css';

const FormCriarTarefa = () => {
    return(
        <form className={styles.formcriartarefa}>
            <CampoTexto/>
            <Botao texto="+"/>
        </form>
    )
}

export {FormCriarTarefa};