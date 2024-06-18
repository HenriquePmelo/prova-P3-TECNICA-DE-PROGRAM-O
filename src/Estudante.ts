import Pessoa from "./Pessoa";

class Estudande extends Pessoa{

    ra: number;
    media: number;

    constructor(nome: string, idade: number,email: string, fone: string, ra: number, media: number) {
        super(nome, email, idade,fone);
        this.ra = ra;
        this.media = media;
        if (!this.validaFone()) console.log('Número de telefone inválido!');
        if (!this.validaEmail()) console.log('e-Mail inválido!');
    }
    validaEmail(): boolean {
        if (!super.validaEmail()) return false;
        return /@(etec|fatec|cps)\.sp\.gov\.br$/.test(this.email);
    }

    situacao(): string {
        if (this.media < 5) return 'Reprovado';
        if (this.media < 6) return 'Exame';
        return 'Aprovado';
    }
}

export default Estudande;


