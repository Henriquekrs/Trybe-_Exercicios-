let Bruto = 1500.10;
let Base = 0;
let Liquido = 0;


if (Bruto <= 1556.94) {
  Base = Bruto - Bruto * 0.08;
} 
else if (Bruto <= 2594.92) {
  Base = Bruto - Bruto * 0.09;
} 
else if (Bruto <= 5189.82) {
  Base = Bruto - Bruto * 0.11;
} 
else {
  Base = Bruto - 570.88;
}

if (Base <= 1903.98) {
  Liquido = Base;
} 
else if (Base <= 2826.65) {
  Liquido = Base - (Base * 0.075 - 142.80);
} 
else if (Base <= 3751.05) {
  Liquido = Base - (Base * 0.15 - 354.80);
} 
else if (Base <= 4664.68) {
  Liquido = Base - (Base * 0.225 - 636.13);
} 
else {
  Liquido = Base - (Base * 0.275 - 869.36);
}

console.log("Salário líquido: R$" + Liquido.toFixed(2));
