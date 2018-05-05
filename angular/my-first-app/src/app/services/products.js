var products = [
    {
        "id": "1",
        "name": "Samsung Galaxy S9",
        "price": "27900"
    },
    {
        "id": "2",
        "name": "Samsung Galaxy S9+",
        "price": "31900"
    },
    {
        "id": "3",
        "name": "IPhone X",
        "price": "47000"
    },
    {
        "id": "4",
        "name": "IPhone 8",
        "price": "28000"
    },
    {
        "id": "5",
        "name": "IPhone 8+",
        "price": "35000"
    }

];

exports.findAll = function() {
    return products;
};

exports.findById = function (id) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].id == id) return products[i];
    }
};