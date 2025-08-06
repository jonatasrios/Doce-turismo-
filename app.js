let ress = document.getElementById("ress")
let resa = document.getElementById("resa")
function agosto(){
    resa.innerHTML = `
                        <button onclick="voltar()">Voltar</button>
                        <h3>Agosto</h3>
                        <p>03 a 10 – Porto Seguro <br>
                        08 a 10 – Campos do Jordão <br>
                        09 a 14 – Porto Seguro – <strong>ESGOTADO</strong><br>
                        10 a 17 – Porto Seguro <br>
                        11 a 17 – Santiago – Chile – <strong>ESGOTADO</strong><br>
                        14 a 17 – Arraial do Cabo<br>
                        14 a 17 – Cabo Frio <br>
                        14 a 17 – Caldas Novas <br>
                        14 a 17 – Ilha Grande <br>
                        14 a 17 – Ubatuba – <strong>ESGOTADO</strong><br>
                        14 a 17 – Angra dos Reis – <strong>ESGOTADO</strong><br>
                        14 a 17 – Búzios – <strong>ESGOTADO</strong><br>
                        14 a 17 – Paraty - <strong>ESGOTADO</strong><br> 
                        14 a 17 – Encantos Capixabas - <strong> ESGOTADO</strong><br>
                        14 a 17 – Guarapari – <strong>ESGOTADO</strong><br>
                        16 a 21 – Porto de Galinhas – <strong>ESGOTADO</strong><br>
                        17 a 24 – Porto Seguro<br>
                        21 a 25 – Festa do Peão – Barretos <br>
                        23 – Festival Gastronômico – Tiradentes <br>
                        23 a 28 – Caldas Novas <br>
                        24 a 31 – Porto Seguro <br>
                        25 a 30 – Três Fronteiras – Foz do Iguaçu <br>
                        29 a 31 – Vesperata Diamantina <br>
                        28/08 a 01/09 – Festa do Peão – Barretos<br>
                        31 – Festival Gastronômico – Tiradentes<br></p>`
}
function setembro(){
    ress.innerHTML = `
                    <button onclick="voltar()">Voltar</button>

    `
}
function voltar(){
    resa.innerHTML = ""
    ress.innerHTML = ""
}