export class Cliente {
    _id: number;
    nome: string;
    email: string;
    pws: string;
    ativo: boolean;

    validar(confpws: string) {
        let erros: string = "";
        if (this.nome == null) {
            erros += "Nome em branco";
        }
        if (this.email == null) {
            erros += "Email em branco";
        }
        if (this.pws == null) {
            erros += "Senha em branco";
        } else if (this.pws != confpws) {
            erros += "Senhas diferentes";

        }
        if (erros != "")
            throw erros;                                                    //Cria um erro

        return true;
    }
}
