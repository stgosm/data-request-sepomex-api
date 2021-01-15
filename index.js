let codigoPostal = document.querySelector('#billing_postcode');
let setColonia = document.querySelector('#billing_city');
let setEstado = document.querySelector("#billing_state");
codigoPostal.onchange = mandoCP;

function mandoCP() {
    let codigoPostal = document.querySelector('#billing_postcode');
    let colonias = document.querySelector('#billing_city');
    setColonia.length = 0;
    var ajax = new XMLHttpRequest();
    ajax.open('GET', `https://api-sepomex.hckdrk.mx/query/info_cp/${codigoPostal.value}?type=simplified`);
    ajax.onreadystatechange = function() {
        if (ajax.status === 200 && ajax.readyState === 4) {
            let data = JSON.parse(ajax.responseText);
            let option;
            
            for (let i = 0; i < data.response.asentamiento.length; i++) {
                option = document.createElement('option');
                option.text = data.response.asentamiento[i];
                option.value = data.response.asentamiento[i];
                colonias.add(option);
            }
        }
        else{
        limpiar()
        console.log(ajax.status);
        }
    }
    ajax.send();
}

function limpiar(){
    while(setColonia.options.length > 0){                
        setColonia.remove(0);
    } 
}


