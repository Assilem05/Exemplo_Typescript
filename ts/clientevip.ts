namespace empresa{
    
    export class ClienteVip extends Cliente{
        private _bonus:number = 0;

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