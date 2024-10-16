const frm = document.querySelector("form")
const resp = document.querySelector("pre")
//OBS: COLOQUE APENAS A TEMPERATURA QUE QUISER CONVERTER

frm.addEventListener("submit", (e) => {
    e.preventDefault()
//OBS: COLOQUE APENAS A TEMPERATURA QUE QUISER CONVERTER

let cel = Number(frm.ipC.value)
let far = Number(frm.ipF.value)
let kel = Number(frm.ipK.value)

let tempF = 0
let tempK = 0
let tempC = 0
if(cel > far && cel > kel){

tempF = (1.8 *cel) + 32;
tempK = cel + 273,15

resp.innerText="temperatura em Fahrenheit: " + tempF + " Temperatura em Kelvin " + tempK
}

else if(far > cel && far > kel){
tempC = (far - 32) / 1.8
tempK = tempC + 273,15

resp.innerText="temperatura em Celcius: " + tempC + "Temperatura em Kelvin: " + tempK

}

else{
tempC = kel - 273,15
tempF = (1.8 *tempC) + 32;

resp.innerText= "temperatura em Celcius: " + tempC + "Temperatura em Fahrenheit" + tempF

}
})