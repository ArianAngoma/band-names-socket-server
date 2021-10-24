const socket = io('http://localhost:4000');

/* Escuchar evento - Obtener bandas */
socket.on('current-bands', (data) => {
    console.log(data);
});