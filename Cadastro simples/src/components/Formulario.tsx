import { useState } from "react";
import Cliente from "../core/Cliente";
import Entrada from "./Entrada";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div className=" bg-gradient-radial from-cyan-300 via-sky-500 to-violet-400 m-0 rounded-xl p-4">
            {id ? (
                <Entrada
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    className="mb-5 text-lg"

                />
            ) : false}
            <Entrada
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
                className="mb-5 text-lg"
            />
            <Entrada
                texto="Idade"
                tipo="number"
                valor={idade}
                valorMudou={setIdade}
                className="text-lg"
            />
            <div className="flex justify-end mt-7">
                <Botao className="text-lg bg-gradient-radial from-lime-400 to-lime-700 mr-4 rounded-xl"
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao className="text-lg bg-gradient-radial from-rose-300 to-rose-600 rounded-xl"
                    onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}