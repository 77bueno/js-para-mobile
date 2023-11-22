function converteMaiusculas(text){
    return text.toUpperCase();
};

function converteMinusculas(text){
    return text.toLowerCase();
};

function formatamoeda(valor){
    return valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });
}

export { converteMaiusculas, converteMinusculas, formatamoeda };