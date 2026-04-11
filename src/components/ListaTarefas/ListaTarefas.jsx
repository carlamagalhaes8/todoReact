import styles from './ListaTarefas.module.css';
import { ListaTarefasItem } from './ListaTarefasItem/ListaTarefasItem';

const ListaTarefas = (props) => {
    const {tarefas} = props;

    return(
        <ul className={styles.listatarefas}>
            {tarefas.map(item => <ListaTarefasItem key={item.id} nome={item.nome}/>)}
            

        </ul>
    )
}

export {ListaTarefas};