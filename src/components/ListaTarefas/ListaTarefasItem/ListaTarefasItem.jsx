import styles from "./ListaTarefasItem.module.css";
import {Botao, TIPO_BOTAO} from '../../Botao';

import { useAppContext } from "../../../hooks";

const ListaTarefasItem = (props) => {
    const {nome, id} = props;

    const {removerTarefa} = useAppContext();

    return(
        <li className={styles.listatarefasitem}>
                {nome}
                <Botao 
                texto="-" 
                tipo={TIPO_BOTAO.SECUNDARIO}
                onClick={() => removerTarefa(id)}
                />
        </li>
    )
}

export { ListaTarefasItem };