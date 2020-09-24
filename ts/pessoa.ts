namespace empresa{
    export abstract class Pessoa{
        private _nome:string;
        private _idade:number;

        constructor(nome:string){
            this.nome = nome;
        }

        get nome(){
            return this._nome;
        }
        set nome(nome:string){
            this._nome = nome;
        }

        get idade(){
            return this._idade;
        }
        set idade(idade:number){
            this._idade = idade;
        }

        public  anoNasc (anoAtual:number):number{
            return anoAtual - this._idade;
        }
    }
}