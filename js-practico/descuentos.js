const coupons = ["CUP10", "CUP20", "CUP30", "CUP40"]

var calcularPrecioConDescuento = function (precio, descuento) {
    const porcentajePagar = 100 - descuento;
    const precioConDescuento = (porcentajePagar * 0.01) * precio;

    return precioConDescuento;
}

var onClickButtonPriceDiscount = function () {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("InputCoupons");
    const couponValue = inputCoupon.value;

    if (!coupons.includes(couponValue)) {
        alert("El cupon " + couponValue + " no es valido");
    }

    let descuento;
    switch (couponValue) {
        case coupons[0]:
            descuento = 10;
            console.log(couponValue);
            break;
        case coupons[1]:
            descuento = 20;
            break;
        case coupons[2]:
            descuento = 30;
            break;
        case coupons[3]:
            descuento = 40;
            break;
    }


    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $ " + precioConDescuento;
}

