let sum = '';
while(true){
    let value = prompt("Masukan huruf", '');
    if(!value)break;

    sum+= value;
}

alert('Sum : ' + sum);