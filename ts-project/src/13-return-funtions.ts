(()=>{
  const calcTotal = (prices: number[]) => {
    let total = 0;
    prices.forEach((item)=>{
      total += item;
    });
    return total.toString();
  }

  const printTotal = (prices:number[]) => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  }

  const rta =printTotal([1,2,1,1,1]);
  console.log(rta)
})();
