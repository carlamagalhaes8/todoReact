import {TIPO_BOTAO} from './constantes';

import styles from './Botao.module.css';

const Botao = (props) => {
    const { texto, tipo = TIPO_BOTAO.PRIMARIO, ...outrasProps} = props;

    return(
        <button className={styles.botao} tipo={tipo} {...outrasProps}>
            {texto}
        </button>
    )
}

export {Botao};