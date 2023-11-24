class Person {
  constructor(nome) {
    this.nome = nome;
  }

  /**
   * Função resposável por retorno uma string informando o nome da pessoa
   * @returns string informando o nome da pessoa cadastrada
   */
  faleMeuNome() {
    return `Meu nome é ${this.nome}!`;
  }
}

module.exports = {
  Person,
};
