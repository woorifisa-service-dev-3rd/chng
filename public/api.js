document.addEventListener('DOMContentLoaded', (event) => {
    const textInput = document.querySelector('.price_input');
    const textExchange = document.querySelector('.exchange_input');
    const calcButton = document.getElementById('exchange_button');

    calcButton.addEventListener('click', () => {
        // console.log('클릭됐삼');
        console.log(textInput.value);
    });
});

function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
} 

function inputNumberFormat(obj) {
    obj.value = comma(uncomma(obj.value));
}

function inputOnlyNumberFormat(obj) {
    obj.value = onlynumber(uncomma(obj.value));
}

function onlynumber(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g,'$1');
}

const debounce = (callback, delay) => {
    let timer;
    return (event) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(callback, delay, event);
    };
};

// textInput.addEventListener('input', debounce((e) => {
    
// }))