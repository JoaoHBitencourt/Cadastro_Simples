import firebase from "../config";
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {

    #conversor = {
        toFirestore(cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade
            };
        },
        fromFirestore(snapshot, options) {
            const dados = snapshot.data(options);
            return new Cliente(dados.nome, dados.idade, snapshot.id);
        }        
    }

    async salvar(cliente) {
        if (cliente?.id) {
           await this.colecao().doc(cliente.id).set(cliente);
           return cliente;
        } else {
            const docRef = await this.colecao().add(cliente);
            const doc = await docRef.get();
            return doc.data();
        }
    }

    async excluir(cliente) {
        return this.colecao().doc(cliente.id).delete();
    }

    async obterTodos() {
        const query = await this.colecao().get();
        return query.docs.map(doc => doc.data()) ?? [];
    }

    private colecao() {
        return firebase
            .firestore().collection('clientes')
            .withConverter(this.#conversor);
    }
}
