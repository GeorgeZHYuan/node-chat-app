var socket = io();
socket.on('connect', function () {
    console.log('Connected to server');

    var messageContent = {
        from: 'Ainz',
        text: 'Commense the 10,000 year plan',
        createAt: 123
    };

    console.log('Sent Message: ', messageContent);

    socket.emit('createMessage', messageContent);
});

socket.on('disconnect', function () {
    console.log('Disconected from server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});
