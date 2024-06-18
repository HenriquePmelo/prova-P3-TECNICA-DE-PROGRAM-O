import Pessoa from "./Pessoa";

class Professor extends Pessoa{

    
    salario: number;
    ra: number;
    

    constructor(nome: string, idade: number, email: string,  fone: string, ra: number,salario: number) {
        super(nome, email, idade,fone);
        
        this.ra = ra;
        this.salario = salario;
        if (!this.validaFone()) console.log('Número de telefone inválido!');
        if (!this.validaEmail()) console.log('e-Mail inválido!');
    }
    validaEmail(): boolean {
        if (!super.validaEmail()) return false;
        return /@(etec|fatec|cps)\.sp\.gov\.br$/.test(this.email);
    }
}


export default Professor;

