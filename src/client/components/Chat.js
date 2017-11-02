import React from 'react'
import ReactDOM from 'react-dom'

export  default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messages: []}
    }

    componentDidMount() {
        const {socket} = this.props;
        socket.on('message', message => {
            this.setState({messages: [ ...this.state.messages, message]})
        })
    };

    handleSubmit = (event) => {
        const socket = this.props.socket;
        const body = event.target.value;
        if (event.keyCode === 13 && body) {
            const message = {
                body,
                from: 'Me'
            };
            this.setState({messages: [...this.state.messages,message ]});
            socket.emit('message', body);
            event.target.value = ''
        }
    };

    render() {
        const messages = this.state.messages.map((message, index) => {
            if (message.from === 'Me') {
                return <p className="message message__from-user" key={index}><b>{message.from}:</b>{message.body} </p>
            }
            else {
                return <p className="message message__from-other" key={index}><b>{message.from}:</b>{message.body}</p>
            }
        });

        return (
            <div className="chat">
                <div className="chat__title"> Pokój 2</div>
                {messages}
                <input className="chat__input" type='text' placeholder='Napisz wiadomość...' onKeyUp={this.handleSubmit}/>
                <span className="chat__input--focus-border"> </span>
            </div>
        )
    }
}