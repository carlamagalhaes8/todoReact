import styles from './Rodape.module.css';

const Rodape = (props) => {
    const {criador} = props;
    const anoAtual = new Date().getFullYear();

    return(
        <div className={styles.rodape}>
            React Básico - {anoAtual} - {criador}
        </div>
    )
}

export {Rodape};