import React from 'react';

export default class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit = (event) => {
        const socket = this.props.socket;
        const nick = event.target.value;
        if (event.keyCode === 13 && nick) {
            this.props.getUser(nick);
            socket.emit('user-nick', nick);
            event.target.value = ''
        }
    };

    render() {
        return (
            <section className="panel">
                Hi!  {this.props.nickname}
                <input className="chat__input" type='text' placeholder='Twój nick' id="user__nick--input" onKeyUp={this.handleSubmit}/>
            </section>
        );
    }
}