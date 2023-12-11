console.log('Hello, world!');

/* 
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero 
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/

/* 
Tools:
- inputs
- value
- const / let
- document.getElementById/querySelector
- Math
- if / else
- element.value
- element.addEventListener
- function () { // code }

*/

// defining variables

const generateBtnElement = document.getElementById('generate');

const cancelBtnElement = document.getElementById('cancel');

const nameInputElement = document.getElementById('NameSurname');

const ageInputElement = document.getElementById('age');

const kmInputElement = document.getElementById('km');

const price_per_km = 0.21;

// eventListener for the button

generateBtnElement.addEventListener('click', function () {
    
    // console.log('I work!', nameInputElement.value, ageInputElement.value, kmInputElement.value);

    const NameSurname = nameInputElement.value;

    const age = parseInt(ageInputElement.value);

    const km = Number(kmInputElement.value);

    // console.log(NameSurname, age, km);

    // console.log(km * price_per_km);

    // do the calculations

    const full_price = km * price_per_km;
    console.log(full_price);  
    let discount;
    
    // Discounted prices

    if (age < 18) {
        console.log('Apply a 20% discount');
        discount = 0.2;

    } else if (age > 65){
        console.log('Apply a 40% discount');
        discount = 0.4;

    } else {
        console.log('Apply full price');
        discount = 0;
    }

    // console.log(discount);

    const final_price = full_price - (full_price * discount);
    console.log('Your ticket price is:', '€' + final_price.toFixed(2));

    document.querySelector('.price').innerHTML = 'Your ticket price is: ' + '€ ' + final_price.toFixed(2);
})

cancelBtnElement.addEventListener('click', function () {
    
    console.log('I work, too!');

})

document.getElementById('NameSurname').value;