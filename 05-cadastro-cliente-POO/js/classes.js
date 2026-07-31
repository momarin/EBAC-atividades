export class Cadastro {
  #nome;
  #email;

  constructor(nome, email) {
    this.#nome = nome;
    this.#email = email;
  }

  get nome() {
    return this.#nome;
  }

  get email() {
    return this.#email;
  }
}

export class Clientes {
  #clientes = [];

  constructor() {}
  adicionar() {
    const cliente = new Cadastro(nome, email);
    this.#clientes.push(cliente);
    return cliente;
  }

  listar() {
    return [...this.#clientes];
  }
  get todos() {
    return this.#clientes.length;
  }
}
