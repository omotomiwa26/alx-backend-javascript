function calculateNumber(type, a, b) {
    const aNum = Math.round(a);
    const bNum = Math.round(b);
    let c = 0;
    switch (type) {
    case 'SUM':
  c = aNum + bNum;
  break;
    case 'SUBTRACT':
  c = aNum - bNum;
  break;
    case 'DIVIDE':
      if (bNum === 0) {
            c = "Error";
      } else {
            c = aNum / bNum;
      }
      break;
    }
    return c;
  }
  
  module.exports = calculateNumber;
