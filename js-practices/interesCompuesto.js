

function interesCompuesto(dinero, interes, tiempo) {
    let interesR = interes / 100;
    return dinero * Math.pow((1 + interesR), tiempo)
}

function onClickButtonResult() {
    const inputMoney = document.getElementById("InputMoney");
    const moneyValue = inputMoney.value;
    const inputInterest = document.getElementById("InputInterest");
    const interestValue = inputInterest.value;
    const inputTime = document.getElementById("InputTime");
    const timeValue = inputTime.value;

    const result = interesCompuesto(moneyValue, interestValue, timeValue);
    console.log(result);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = `El dinero que tendras despues de ${tiempo} a;os sera: + ${result}`;
}