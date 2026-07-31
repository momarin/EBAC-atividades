export function validar(nome, email) {
  return nome && email && nome.trim() !== "" && email.trim() !== "";
}
