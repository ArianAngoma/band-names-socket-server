/* Importaciones propias */
const Band = require('./band');

class BandList {
    constructor() {
        this.bands = [
            new Band('Metallica'),
            new Band('Héroes del Silencio'),
            new Band('Bon Jovi'),
            new Band('Breaking Benjamin')
        ];
    }

    /* Método para agregar una nueva banda */
    addBand(name) {
        const newBand = new Band(name);
        this.bands.push(newBand);
        return this.bands;
    }

    /* Método para eliminar un método por id */
    removeBand(id) {
        this.bands = this.bands.filter(band => band.id !== id);
    }

    /* Método para obtener la lista de bandas */
    getBands() {
        return this.bands;
    }

    /* Método para agregar un voto a una banda po id */
    increaseVotes(id) {
        this.bands = this.bands.map(band => {
            if (band.id === id) band.vote += 1;
            return band;
        })
    }

    /* Método para cambiar nombre de una banda por id */
    changeName(id, newName) {
        this.bands = this.bands.map(band => {
            if (band.id === id) band.name = newName;
            return band;
        })
    }
}

module.exports = BandList;