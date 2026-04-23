import styles from "./ListaTarefasItem.module.css";
import {Botao, TIPO_BOTAO} from '../../Botao';

import { useAppContext } from "../../../hooks";

import { useState } from "react";

import { CampoTexto } from "../../CampoTexto";

import { Loading } from "../../Loading";

const ListaTarefasItem = (props) => {
    const {nome, id} = props;

    const [estaEditando, setEstaEditando] = useState(false);

    const {loadingEditar, loadingDeletar, editarTarefa, removerTarefa} = useAppContext();

    const onBlurTarefa= (event) => {
        const nomeTarefa = event.currentTarget.value;

        editarTarefa(id, nomeTarefa);

        setEstaEditando(false);
    };

    const loadingEstaEditando = loadingEditar == id;
    const loadingEstaDeletando = loadingDeletar == id;

    return(
        <li className={styles.listatarefasitem}>

                {(loadingEstaEditando || estaEditando) && (
                    <CampoTexto 
                    defaultValue={nome}
                    onBlur={onBlurTarefa} 
                    autoFocus 
                    />
                )}
                {!loadingEstaEditando && !estaEditando && (
                    <span onDoubleClick={() => setEstaEditando(true)}>
                        {nome}
                    </span>
                )}

                {loadingEstaEditando && (
                    <Loading/>
                )}

                <Botao 
                texto={loadingEstaDeletando ? <Loading/> : "-"} 
                tipo={TIPO_BOTAO.SECUNDARIO}
                onClick={() => removerTarefa(id)}
                />
        </li>
    )
}

export { ListaTarefasItem };