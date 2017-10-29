import React, {Component} from 'react';
import io from 'socket.io-client';

import Aside from './components/Aside';
import Chat from './components/Chat';

const socketUrl = 'localhost:3000';

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: 'MAKAO',
			socket:null,
			user: null
		};
	}

    componentWillMount(){
        this.initSocket();
    };

    initSocket = () => {
        const socket = io(socketUrl);
        socket.on('connect', () => {
            console.log("User connected");
        });
        this.setState({socket});
    };

	render() {
		return (
			<div className="full row">
				<Aside />
			    <Chat socket={this.state.socket}/>
			</div>

		);
	}
}
