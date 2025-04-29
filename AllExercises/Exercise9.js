console.log(adress);

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCodes
    };
}

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}