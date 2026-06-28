class Parquimetro {
  // atributo
  #valorHora;
  constructor() {
    this.#valorHora = 10;
  }

  calcularValor(permanencia) {
    if (permanencia <= 30) {
      return 1.0;
    } else if (permanencia <= 60) {
      return 1.75;
    } else if (permanencia <= 120) {
      return 3.0;
    } else {
      return "Tempo excedido";
    }
  }

  calcularTroco(valorPago, valorAPagar) {
    return valorPago - valorAPagar;
  }

  get valorHora() {
    return this.#valorHora;
  }
}

class Cliente {
  constructor(parquimetro) {
    this.parquimetro = parquimetro;
  }

  calcular() {
    const permanencia = document.getElementById("permanencia").value;

    if (!permanencia) {
      alert("Preencha tempo de permanência");
      return;
    }

    if (permanencia > 120) {
      alert("Tempo não deve ser maior que 120");
      return;
    }

    const valorAPagar = this.parquimetro.calcularValor(permanencia);
    document.getElementById("resultado").textContent =
      `R$ ${valorAPagar.toFixed(2)}`;
    document.getElementById("troco").textContent = "R$ 00,00";
    document.getElementById("recebido").value = "";
  }

  calcularTroco() {
    const valorRecebido = document.getElementById("recebido").value;
    const resultado = document.getElementById("resultado").textContent;
    const valorAPagar = parseFloat(
      resultado.replace("R$ ", "").replace(",", "."),
    );

    if (!valorRecebido) {
      alert("Preencha o valor recebido");
      return;
    }

    if (valorRecebido < valorAPagar) {
      alert("Valor insuficiente");
      return;
    }

    const troco = this.parquimetro.calcularTroco(valorRecebido, valorAPagar);
    document.getElementById("troco").textContent = `R$ ${troco.toFixed(2)}`;
  }
}
const parquimetro = new Parquimetro();
const cliente = new Cliente(parquimetro);
