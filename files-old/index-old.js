let nametwitter = document.querySelector('#name');
let username = document.querySelector('#username');
let date = document.querySelector('#date');
let contain = document.querySelector('#text-contain');
let hashtags = document.querySelector('#hashtags');

let inputName = document.querySelector('#inputName');
let inputUsername = document.querySelector('#inputUsername');
let inputDate = document.querySelector('#inputDate');
let inputContain = document.querySelector('#inputContain');
let inputHashtags = document.querySelector('#inputHashtags');

let btn = document.querySelector('#btn');

// --------------------------

btn.addEventListener('click', modificar);

function modificar () {
	nametwitter.innerText = inputName.value;
	username.innerText = '@' + inputUsername.value;
	date.innerText = '· ' + inputDate.value + '.';
	contain.innerText = inputContain.value;
	hashtags.innerText = inputHashtags.value;
}



/* // Obtener fecha actual


function formatoFecha(fecha, formato) {
    const map = {
        dd: fecha.getDate(),
        mm: fecha.getMonth() + 1,
        yy: fecha.getFullYear().toString().slice(-2),
        yyyy: fecha.getFullYear()
    }

    return formato.replace(/dd|mm|yy|yyy/gi, matched => map[matched])
}

let hoy = new Date();

console.log(`${formatoFecha(hoy, 'dd/mm')}`);

// Modificar atributo value en fecha

inputDate.getAttribute('value','hola' ) */