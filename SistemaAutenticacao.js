/* Autenticável possui o método autenticar() */
export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }
  /* verifica se existe o método autenticar() e se é uma função */
  static ehAutenticavel(autenticavel){
      return "autenticar" in autenticavel && 
      autenticavel.autenticar instanceof Function;
      /* duck typing */
  }
}
