import styles from './ListaTarefas.module.css';
import { ListaTarefasItem } from './ListaTarefasItem/ListaTarefasItem';

import { useAppContext } from "../../hooks";

import { Loading } from '../Loading';

const ListaTarefas = () => {
    const {tarefas, loadingCarregar} = useAppContext();

    return(
        <ul className={styles.listatarefas}>
            {loadingCarregar && (
                <p>Carregando... <Loading/> </p>)
            }

            {loadingCarregar && !tarefas.length && (
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