const contador = document.getElementById("contador")

function counts(){
    let cuenta = localStorage.getItem("COUNT_V1")
    if(!cuenta){
        localStorage.setItem("COUNT_V1", JSON.stringify(1))
        return 1;
    }else{
        const nuevaCuenta = JSON.parse(cuenta) + 1
        localStorage.setItem("COUNT_V1", JSON.stringify(nuevaCuenta))
        return nuevaCuenta
    }
};

const resultado = counts();

contador.innerHTML = `
    <h1>Contador de Visitas local</h1>
    <div class="visitantes">     
        <p class="numero">${resultado}</p>
        <p class="texto">Visitas</p>
    </div>
`

function resetCount(){
    localStorage.setItem("COUNT_V1", "0")
}