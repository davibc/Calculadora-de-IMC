function calcularIMC() {
    let pesoComoString = (document.querySelector("#peso-input").value).replace(/,/g, ".")
    let alturaComoString = (document.querySelector("#altura-input").value).replace(/,/g, ".")
    
    console.log(`Os valores foram: \n Peso -> ${pesoComoString} ${typeof pesoComoString} \n Altura -> ${alturaComoString} ${typeof alturaComoString}`)

    let pesoComoNumero = Number(pesoComoString)
    let alturaComoNumero = Number(alturaComoString)

    console.log(`Os novos valores foram: \n Peso -> ${pesoComoNumero} ${typeof pesoComoNumero} \n Altura -> ${alturaComoNumero} ${typeof alturaComoNumero}`)

    let imc = pesoComoNumero / (alturaComoNumero ** 2)
    imc = imc.toFixed(2)

    console.log(`IMC -> ${imc}`)

    document.querySelector("#resultado").innerHTML = imc
};