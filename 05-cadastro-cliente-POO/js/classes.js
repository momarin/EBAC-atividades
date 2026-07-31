export class ClientesAPI {
  #apiUrl = "https://localhost:3000/clientes";

  async listar() {
    const response = await fetch(this.#apiUrl);
    const clientes = await response.json();
    return clientes;
  }

  async cadastrar(nome, email) {
    await fetch(this.#apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email }),
    });
  }

  async deletar(id) {
    const response = await fetch(`${this.#apiUrl}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Erro ao deletar cliente");
    }
  }
}
