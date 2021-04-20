const CURRENCIES = [
    ["PENNY", 1], ["NICKEL", 5], ["DIME", 10],
    ["QUARTER", 25], ["ONE", 100], ["FIVE", 500],
    ["TEN", 1000], ["TWENTY", 2000], ["ONE HUNDRED", 10000]
  ];
  
  
  function checkCashRegister(price, cash, cid) {
    let cashToReturn = Math.round(cash * 100) - Math.round(price * 100);
    let moneyAvaliable = {};
    let moneyForGiving = {};
  
    cid.forEach(currency => {
      moneyAvaliable[currency[0]] = Math.round(currency[1] * 100)
    });
  
    let index = CURRENCIES.length - 1;
  
    while ( index >= 0 && cashToReturn > 0) {
      let currencyName = CURRENCIES[index][0];
      let currencyAmount = CURRENCIES[index][1];
  
      if (cashToReturn - currencyAmount > 0 && moneyAvaliable[currencyName], cashToReturn) {
        moneyForGiving[currencyName] = 0;
        while (moneyAvaliable[currencyName] > 0 && cashToReturn - currencyAmount >= 0) {
          moneyAvaliable[currencyName] -= currencyAmount;
          moneyForGiving[currencyName] += currencyAmount;
          cashToReturn -= currencyAmount;
        } 
      }
  
    index--;
    }
  
    if (cashToReturn === 0) {
      let regEmpty = true;
  
      Object.keys(moneyAvaliable).forEach(moneyType => {
        if (moneyAvaliable[moneyType] > 0) {
          regEmpty = false;
        }
      });
      if (regEmpty) {
        return { status: "CLOSED", change: cid}
      }else {
        let chngArray = [];
        Object.keys(moneyForGiving).map(moneyType => {
          if (moneyForGiving[moneyType] > 0) {
            chngArray.push([moneyType, moneyForGiving[moneyType] / 100]);
          };
        });
  
        return { status: "OPEN", change: chngArray };
      }
    }
    return { status: "INSUFFICIENT_FUNDS", change: []};
  
  }
  
  let result = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
  console.log(result);