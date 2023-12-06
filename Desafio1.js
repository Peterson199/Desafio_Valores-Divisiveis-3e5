

function somatorioDivisiveisPor3ou5(numero) {
    let somatorio = 0;
  
    for (let i = 1; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        somatorio += i;
      }
    }
  
    return somatorio;
  }
  
  // Adicione seus próprios valores
  console.log(somatorioDivisiveisPor3ou5(19));


  
  