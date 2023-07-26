import Formulario from "../components/Formulario"
import Botao from "../components/Botao"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import useClientes from "../hooks/useClientes"

export default function Home() {

  const {
    novoCliente,
    salvarCliente,
    selecionarCliente, 
    excluirCliente,
    exibirTabela,
    cliente, 
    clientes, 
    tabelaVisivel,
} = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-radial from-cyan-500 via-sky-600 to-violet-800
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao className="text-lg mb-4 bg-gradient-radial from-cyan-300 to-sky-600 rounded-xl"
                onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}