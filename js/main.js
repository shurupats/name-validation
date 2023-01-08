function parseFio(){
    const fio = document.querySelector(".fio").value.split(' ');

    let newFio = new Array(3);

    let i = 0;
    fio.forEach(element => {
        if(element != ''){
            newFio[i] = element;
            i++;
        }
    });
    
    document.querySelector('.firstName').value = parseString(newFio[0]);
    document.querySelector('.lastName').value = parseString(newFio[1]);
    document.querySelector('.patronymic').value = parseString(newFio[2]);

}

function parseString(str){
    str = str.toLowerCase();
    str = str.replace(str[0], str[0].toUpperCase());
    return str;
}


document.querySelector(".button").addEventListener("click", parseFio);