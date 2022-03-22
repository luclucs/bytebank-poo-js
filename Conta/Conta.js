/* Classe abstrata */
export class Conta {
  constructor(saldoInicial, cliente, agencia) {
  /* verifica se o constructor é do tipo Conta e estoura erro na tela */
    if(this.constructor == Conta){
      throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente");
    }
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }
  /* verifica se a instância do cliente pertence a classe Cliente */
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }
  get cliente() {
    return this._cliente;
  }
  get saldo() {
    return this._saldo;
  }
  /* método abstrato, não serve para ser chamado diretamente, somente para ser sobreescrito */
  sacar(valor) {
    throw new Error("O método sacar da conta é abstrato.");
  }
  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
    return 0;
  }
  depositar(valor) {
    this._saldo += valor;
  }
  tranferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
