import styles from './ListaTarefas.module.css';
import { ListaTarefasItem } from './ListaTarefasItem/ListaTarefasItem';

import { useAppContext } from "../../hooks";

const ListaTarefas = () => {
    const {tarefas} = useAppContext();

    return(
        <ul className={styles.listatarefas}>
            {!tarefas.length && (
                <p>Não há tarefas cadastradas...</p>
            )}
            {tarefas.map(item => (
                <ListaTarefasItem 
                key={item.id} 
                id={item.id} 
                nome={item.nome}
                />
                ))}
            

        </ul>
    )
}

export {ListaTarefas};