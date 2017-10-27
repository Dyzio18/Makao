import React, {Component} from 'react';
import HelloWorld from './components/HelloWorld';
import Chat from './components/Chat';

//import io from 'socket.io';

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: 'MAKAO',
		};
	}

	render() {
		return (
			<div>
				<h1> App works ! {this.state.name}</h1>
				<HelloWorld />
			    <Chat/>
			</div>

		);
	}
}
