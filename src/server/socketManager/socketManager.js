import {io} from './../index';

// number of user in room
let userCountInRoom = 0;

function socketManager(io) {

    io.on('connect', () => {
        userCountInRoom++;
        console.log(userCountInRoom);
    });

    /**
     * From
     */
    io.on('message', message => {
        io.broadcast.emit('message', {
            body: message.body,
            from: message.from
        })
    });

    io.on('nick-name', nick => {

    })

}


export default socketManager;