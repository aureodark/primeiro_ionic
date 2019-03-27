export class Cliente {
    _id: number;
    nome: string;
    email: string;
    pws: string;
    ativo: boolean;

    validar(confpws: string) {
        let erros: string = "";
        if (this.nome == "") {
            erros += "Nome em branco";
        }
        if (this.email == "") {
            erros += "Email em branco";
        }
        if (this.pws == "") {
            erros += "Senha em branco";
        } else if (this.pws != confpws) {
            erros += "Senhas diferentes.";

        }
        if (erros != "")
            throw erros;                                                    //Cria um erro

        return true;
    }
}
