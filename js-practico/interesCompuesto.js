

function interesCompuesto(dinero, interes, tiempo) {
    let total = dinero = + rendimientoAnual
    const rendimientoAnual = dinero * (interes * 0.);
    const totalDinero = rendimientoAnual + dinero;
    for (let i = 0; i > tiempo; i++) {

    }




    return rendimientoTotal;


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