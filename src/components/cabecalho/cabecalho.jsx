import styles from './Cabecalho.module.css';

import { Link } from 'react-router-dom';

const Cabecalho = () => {
    return(
        <div className={styles.cabecalho}>
            <Link to="/"><h1><span>Todo</span> List</h1></Link>
            <Link to="/sobre-nos">Sobre Nós</Link>
        </div>
    )
}

export {Cabecalho};