let textoCriptografado;

let textoDescriptografado;

let texto;

let caixaResultadoBoxInicio;

let caixaResultadoBoxInserir = document.querySelector("main");

function criptografar() {
    texto = document.getElementById("mensagem").value;
    caixaResultadoBoxInicio = document.getElementById("aplicacao__resultado__id");
    if (texto.length > 4) {
        if (caixaResultadoBoxInicio == null) {
            textoCriptografado = texto
                .toLowerCase()
                .normalize('NFD').replace(/[\u0300-\u0303\u0327]/g, "")
                .replace(/[^a-z ]/g, "")
                .replaceAll(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/u/g, "ufat")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober");
            let textoResultadoCripto = document.getElementById("mensagem__resultado");
            textoResultadoCripto.value = textoCriptografado;
        } else {
            textoCriptografado = texto
                .toLowerCase()
                .normalize('NFD').replace(/[\u0300-\u0303\u0327]/g, "")
                .replace(/[^a-z ]/g, "")
                .replaceAll(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/u/g, "ufat")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober");
            caixaResultadoBoxInicio.remove();
            caixaResultadoBoxInserir.insertAdjacentHTML("beforeend", '<section class="aplicacao__resultado__box"><div class="caixa__resultado"><textarea id="mensagem__resultado"></textarea></div><div class="aplicacao__resultado__botao" id="botao__copiar"><button onclick="copiar()" class="aplicacao__resultado__botao__copiar">Copiar</button></div></section>');      
            let textoResultadoCripto = document.getElementById("mensagem__resultado");
            textoResultadoCripto.value = textoCriptografado;
        };
    } else {
        location.reload();
    };
};

function copiar() {
    let caixaTextoDireito = document.getElementById("mensagem__resultado");
    caixaTextoDireito.select();
    caixaTextoDireito.setSelectionRange(0, 99999); //copia em dispositivos moveis
    navigator.clipboard.writeText(caixaTextoDireito.value);
  };

// function descriptografar() {
//
//};

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"