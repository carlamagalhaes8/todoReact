import styles from "./ListaTarefasItem.module.css";
import {Botao, TIPO_BOTAO} from '../../Botao';

const ListaTarefasItem = (props) => {
    const {nome} = props;

    return(
        <li className={styles.listatarefasitem}>
                {nome}
                <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO}/>
        </li>
    )
}

export { ListaTarefasItem };