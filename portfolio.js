let check = document.getElementById ("checkbox")

function dark() {
if (check.checked){
    document.body.classList.add("darkmode")
    localStorage.setItem("modo", "escuro")
}
else {
    document.body.classList.remove("darkmode")
    localStorage.setItem ("modo", "claro")
}
}

addEventListener ("DOMContentLoaded", ()=> {
let status = localStorage.getItem("modo")
if (status === "escuro") {
    check.checked = true
}
else {
    check.checked = false
}
dark()
})
let modal = document.getElementsByClassName("dialogo") [0]
let modal2 = document.getElementsByClassName("dialogo1") [0]
let modal3 = document.getElementsByClassName("dialogo2") [0]
let modal4 = document.getElementsByClassName("dialogo3") [0]


function abrir() {
    modal.showModal()
    modal.classList.add ("modal")
}

function fechar () {
    modal.close ()
}

function abrir1() {
    modal2.showModal()
    modal2.classList.add ("modal2")
}
function fechar1 () {
    modal2.close ()
}
function abrir2() {
    modal2.showModal()
    modal2.classList.add ("modal3")
}
function fechar2 () {
    modal2.close ()
}

function abrir3() {
    modal2.showModal()
    modal2.classList.add ("modal4")
}
function fechar3 () {
    modal2.close ()
}


const checkbox = document.getElementById('copiarCheckbox');
const textoElemento = document.getElementById('textoParaCopiar');


checkbox.addEventListener('change', function() {

    if (this.checked) {

        const texto = textoElemento.textContent || textoElemento.innerText;
        

        navigator.clipboard.writeText(texto).then(() => {
            console.log('Texto copiado para a área de transferência!');
            alert('numero copiado! (' + texto + ')');
        }).catch(err => {
            console.error('Erro ao copiar texto: ', err);
            alert('Falha ao copiar o texto.');
        });
    } else {
     
        console.log('Checkbox desmarcada, nada copiado.');
    }
});


const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "965aa16a-ae55-4ba5-9472-a26a4845ceb0");

    const originalText = submitBtn.textContent;
          

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

      
    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

document.getElementById('form').addEventListener('submit', function(event) {

    event.preventDefault();
    alert('Dados enviados com sucesso!');
});