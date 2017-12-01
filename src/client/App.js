import React, {Component} from 'react';
import io from 'socket.io-client';

import Panel from './components/Panel';
import Chat from './components/Chat';

const socketUrl = 'localhost:3000';

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: 'Chat app',
			socket:null,
			nickname: ''
		};
	}

    componentWillMount(){
        this.initSocket();
    };

    /**
     * Socket initialization form client side
     */
    initSocket = () => {
        const socket = io(socketUrl);
        socket.on('connect', () => {
            console.log("User connected");
        });
        this.setState({socket});
    };

    getUser = nick => {
        console.log(nick);
        this.setState({nickname:nick});
    };

	render() {
		return (
			<div className="app">
				<Panel getUser={this.getUser} nickname={this.state.nickname} socket={this.state.socket} />
			    <Chat socket={this.state.socket} nickname={this.state.nickname}/>
			</div>

		);
	}
}
