import {io} from './../index';


function socketManager(io){

    io.on('message', body => {
        io.broadcast.emit('message', {
            body,
            from: io.id.slice(8)
        })
    })
}


export default socketManager;