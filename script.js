// Preços iguais aos exibidos na página.
const precoMouse = 59.90;
const precoTeclado = 149.90;
const precoHeadset = 119.90;

// Formata números como valores em reais.
function reais(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Solicita uma quantidade válida (número inteiro e não negativo).
function pedirQuantidade(nomeProduto) {
  while (true) {
    const resposta = prompt("Quantas unidades de " + nomeProduto + " deseja comprar?\nDigite 0 para não comprar.");

    if (resposta === null) return null; // Usuário cancelou.
    if (resposta.trim() === "") {
      alert("Digite uma quantidade válida (0, 1, 2...).");
      continue;
    }

    const quantidade = Number(resposta);
    if (Number.isInteger(quantidade) && quantidade >= 0 && Number.isSafeInteger(quantidade)) {
      return quantidade;
    }
    alert("Quantidade inválida! Digite um número inteiro maior ou igual a zero.");
  }
}

function simularCompra() {
  const qtdMouse = pedirQuantidade("Mouse sem fio");
  if (qtdMouse === null) return;

  const qtdTeclado = pedirQuantidade("Teclado mecânico");
  if (qtdTeclado === null) return;

  const qtdHeadset = pedirQuantidade("Headset gamer");
  if (qtdHeadset === null) return;

  if (qtdMouse === 0 && qtdTeclado === 0 && qtdHeadset === 0) {
    alert("Nenhum produto foi selecionado.");
    return;
  }

  const totalMouse = precoMouse * qtdMouse;
  const totalTeclado = precoTeclado * qtdTeclado;
  const totalHeadset = precoHeadset * qtdHeadset;
  const subtotal = totalMouse + totalTeclado + totalHeadset;

  // Desconto de 10% a partir de R$ 300,00 (antes do desconto).
  const desconto = subtotal >= 300 ? subtotal * 0.10 : 0;
  const totalFinal = subtotal - desconto;

  const resumo = "RESUMO DA COMPRA - TECHSTORE\n\n" +
    "Mouse sem fio: " + qtdMouse + " unidade(s) — " + reais(totalMouse) + "\n" +
    "Teclado mecânico: " + qtdTeclado + " unidade(s) — " + reais(totalTeclado) + "\n" +
    "Headset gamer: " + qtdHeadset + " unidade(s) — " + reais(totalHeadset) + "\n\n" +
    "Subtotal: " + reais(subtotal) + "\n" +
    "Desconto: " + reais(desconto) + "\n" +
    "TOTAL DA COMPRA: " + reais(totalFinal) + "\n\n" +
    "Obrigado por visitar a TechStore!";

  alert(resumo);
}
