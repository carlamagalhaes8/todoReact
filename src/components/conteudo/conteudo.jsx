import styles from './Conteudo.module.css';

const Conteudo = (props) => {
    const {children} = props;
    return(
        <div className={styles.conteudo}>
            {children}
        </div>
    )
}

export {Conteudo};