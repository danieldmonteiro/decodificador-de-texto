let textoCriptografado;

let textoDescriptografado;

let texto;

let resultadoImagem = document.getElementById("imagem__inicial");

function criptografar() {
    texto = document.querySelector("textarea").value;
    if (texto.length > 4) {
        if (resultadoImagem == false) {
            textoCriptografado = texto
                .toLowerCase()
                .normalize('NFD').replace(/[\u0300-\u0303\u0327]/g, "")
                .replace(/[^a-z ]/g, "")
                .replaceAll(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/u/g, "ufat")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober");
            document.getElementById("texto__inicial").innerHTML = textoCriptografado;
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
            resultadoImagem.remove();
            document.getElementById("texto__inicial").innerHTML = textoCriptografado;
        };
    } else {
        location.reload();
    };
};

// function descriptografar() {
//
//};

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"