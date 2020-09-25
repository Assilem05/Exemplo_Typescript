namespace empresa{
    
    export class ClienteVip extends Cliente implements INTERendereco{
        private _bonus:number = 0;
        logradouro:string;
        cidade:string;

        set inserirCidade(cidade:string){
            this.cidade = cidade;
        }
        set inserirLogradouro(logradouro:string){
            this.logradouro = logradouro;
        }

        public mostraEndereco():string{
            return this.logradouro + ' ' + this.cidade;
        }

        get bonus():number{
            return this._bonus;
        }
        set bonus(bonus:number){
            this._bonus = bonus;
        }


          public comprar(valorProduto:number, desconto?:number){
            let resultado:string;

            if(typeof desconto === undefined){
                if(valorProduto <= this.credito + this._bonus){
                    resultado = "Aprovada!";
                }
                    else{
                        resultado = "Negada..";}
            }
                else{
                    if((valorProduto - desconto) <= this.credito + this._bonus){
                        resultado = "Aprovada!";
                    }
                        else{
                            resultado = "Negada..";}
                }
            return resultado;
        }
    }
}