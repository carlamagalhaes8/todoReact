import styles from './CampoTexto.module.css';

const CampoTexto = (props) => {

    return(
        <input 
            type='text'
            className={styles.campotexto} 
            {...props}
        />
    )
}

export {CampoTexto};