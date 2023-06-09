class Auto {
    // atributo
    _marca
    constructor(marca) {
        this._marca = marca;
    }
    // metodo
    arrancar() {
        return `Arrancando auto ${this._marca}`;
    }
};

const a1 = new Auto("Peugeot");
console.info(a1.arrancar());