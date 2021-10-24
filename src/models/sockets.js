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

            /* Escuchar evento - votar banda */
            socket.on('vote-band', (id) => {
                this.bandList.increaseVotes(id);

                /* Emitir al cliente conectado, todas las bandas actuales */
                this.io.emit('current-bands', this.bandList.getBands());
            });

            /* Escuchar evento - eliminar banda */
            socket.on('delete-band', (id) => {
                this.bandList.removeBand(id);

                /* Emitir al cliente conectado, todas las bandas actuales */
                this.io.emit('current-bands', this.bandList.getBands());
            });

            /* Escuchar evento - cambiar nombre de banda */
            socket.on('change-name-band', ({id, name}) => {
                this.bandList.changeName(id, name);

                /* Emitir al cliente conectado, todas las bandas actuales */
                this.io.emit('current-bands', this.bandList.getBands());
            });
        });
    }
}

module.exports = Sockets;