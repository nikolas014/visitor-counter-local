function numeroCifras(num){
    let numCifras = 1
    while(num >= 10){
        num = num / 10
        numCifras++
    }
    return numCifras
}
function ultimaCifra(num){
    return num%10
}
function largoDeLaRaiz(num){
    let numCifrasPorComprobar = ultimaCifra(num)
    numCifrasPorComprobar = numCifrasPorComprobar * numCifrasPorComprobar
    let res = numeroCifras(numCifrasPorComprobar);
    return res
}
function extraerPrimerasCifrasIndicandoCantidad(numero, cifras){
    let cantidadDeVecesADividir = numeroCifras(numero) - cifras
    while(cantidadDeVecesADividir > 0){
        numero = (numero - numero%10) / 10
        console.log(cantidadDeVecesADividir)
        console.log(numero)
        cantidadDeVecesADividir--
    }
    return numero
}
function comprobacionFinal(num){
    if(extraerPrimerasCifrasIndicandoCantidad(num, largoDeLaRaiz(num)) == ultimaCifra(num)*ultimaCifra(num)){
        alert("Es el numero que buscamos")
    }else{
        alert("no es el numero que buscamos")
    }
}
