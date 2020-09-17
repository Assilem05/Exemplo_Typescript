namespace empresa{
    export class Cliente extends Pessoa{
        private _codCliente:number;
        private _credito:number;
      
        get codCliente():number{
            return this._codCliente;
        }
        set codCliente(cod:number){
            this._codCliente = cod;
        }

        get credito():number{
            return this._credito;
        }
        set credito(credito:number){
            this._credito = credito;
        }

        public comprar(valorProduto:number, desconto?:number){
            let resultado:string;

            if(typeof desconto === undefined){
                if(valorProduto <= this._credito){
                    resultado = "Aprovada!";
                }
                    else{
                        resultado = "Negada..";}
            }
                else{
                    if((valorProduto - desconto) <= this._credito){
                        resultado = "Aprovada!";
                    }
                        else{
                            resultado = "Negada..";}
                }
            return resultado;
        }

       
    } 
}