/* Importaciones propias */
const BandList = require('../models/band-list');

class Sockets {
    constructor(io) {
        this.io = io;

        /* Instancia de BandList */
        this.bandList = new BandList();

        this.socketEvents();
    }

    socketEvents() {
        /* On connection */
        this.io.on('connection', (socket) => {
            console.log('Cliente conectado');

            /* Emitir al cliente conectado, todas las bandas actuales */
            socket.emit('current-bands', this.bandList.getBands());
        });
    }
}

module.exports = Sockets;