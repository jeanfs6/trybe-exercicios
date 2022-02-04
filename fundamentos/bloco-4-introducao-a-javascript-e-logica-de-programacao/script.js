// const a = 70;
// const b = 10;
// const c = 100;

// 1)
// let adicao = a + b;
// console.log(adicao);
// let sub = a - b;
//  console.log(sub);
// let mult = a * b;
// console.log(mult);
// let div = a / b;
// console.log(div);
// let resto = a % b;
// console.log(resto);

// 2)
// if (a > b) {
//     console.log(a)
// }

// 3)
// if (a > b && a > c ) {
//     console.log(a);
// } else if (b > a && b > c ) {
//     console.log(b);
// } else  {
//     console.log(c);
// }
// 4)
// if ( a > 0) {
//     console.log("positive")
// }else if ( a < 0) {
//     console.log ("negative")
// }else {
//     console.log("zero")
// }

//  7)
// if ( a < 0 || b < 0 || c < 0) {
//   console.log ("não existe ângulo com valor negativo");
// }else if ( a + b + c === 180) {
//     console.log (true);
// }else {
// console.log(false);
// }
function xadrez(peca) {
    let resposta = "";
    switch (peca.toUpperCase()) {
      case ("PEÃO"):
        resultado = "Os peões se movem somente para frente, uma casa por vez";
        break;
      case ("BISPO"):
        resultado = "O bispo se move em uma linha reta diagonalmente no tabuleiro";
        break;
      case ("CAVALO"):
        resultado = "O cavalo é a única peça do tabuleiro que pode pular sobre outras peças. O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto.";
        break;
      case ("TORRE"):
        resultado = "O cavalo é a única peça do tabuleiro que pode pular sobre outras peças. O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto.";
        break;
      case ("RAINHA"):
        resultado = "Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.";
        break
      case ("REI"):
        resultado = "O rei tem pouca mobilidade, assim ele é considerado também uma das peças mais fracas no jogo. O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente."
        break;
      default:
        resultado = "Peça não existe";
        break;
      }
      return resultado;
  }
      console.log(xadrez("rEi"));
  
  
  
  
  
  
  
  
  
  
  
  

    










