/* Desenvolva aqui a rotina */

document.getElementById("btn_calcular").setAttribute("onclick", "calculo()");

document
  .getElementById("valor_transporte")
  .setAttribute("onmouseout", "calculo()");
document
  .getElementById("valor_alimentacao")
  .setAttribute("onmouseout", "calculo()");
document
  .getElementById("valor_receita")
  .setAttribute("onmouseout", "calculo()");
document
  .getElementById("valor_automovel")
  .setAttribute("onmouseout", "calculo()");
document.getElementById("faltas").setAttribute("onmouseout", "calculo()");

const calculo = () => {
  const valorBase = parseInt(document.getElementById("valor_base").value);

  const valorTransporte = parseInt(
    document.getElementById("valor_transporte").value
  );

  const valorAlimentacao = parseInt(
    document.getElementById("valor_alimentacao").value
  );

  const calculoValor = valorBase + valorTransporte + valorAlimentacao;
  document.getElementById("valor_receita").setAttribute("value", calculoValor);

  const descontoAutomovel = parseInt(
    document.getElementById("valor_automovel").value
  );

  const faltas = parseInt(document.getElementById("faltas").value);

  const calculoDesconto = descontoAutomovel + faltas;
  document
    .getElementById("valor_descontos")
    .setAttribute("value", calculoDesconto);

  const total = calculoValor - calculoDesconto;
  document.getElementById("valor_total").setAttribute("value", total);
};
