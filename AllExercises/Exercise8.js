let address = {
    street: 'a',
    city: 'b',
    zipocode: 'c'
};

function  showAdress(address) {
    for (let key in address)
    console.log(KeyboardEvent, address[key]);
}

showAdress(address);