import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import s from './style';

class SideBar extends Component{

	constructor(props){
		super(props);
		let currentTime = new Date();
		this.state ={time:currentTime.getMinutes()+":"+currentTime.getSeconds()}
	}
	componentWillMount(){
		let currentTime = new Date();
		let seconds = currentTime.getSeconds();
        let minutes = currentTime.getMinutes();
      
        setInterval(()=>{
			if(seconds>=59){
        		minutes++; 
        		seconds=0;
        	}else{
        		seconds++;
        	}
        	let time = minutes+":"+seconds;
        	this.setState({time})
        },1000) ;
	}
	render(){
		return (<s.SideBarContainer>
					<s.Header>Demo : {this.state.time}</s.Header>
					<s.SideBarNav>
						<s.List>
			        	
			        		<s.ListItem><Link to='/Lobby'>Lobby</Link></s.ListItem>
			        		<s.ListItem><Link to='/TicTacToe'>Tic tac toe</Link></s.ListItem>
			        		<s.ListItem><Link to='/TicTacToe'>To DOs</Link></s.ListItem>
			        		<s.ListItem><Link to='/UserSettings'>Settings</Link></s.ListItem>
			        		
			        	</s.List>

					</s.SideBarNav>
					<s.Main>{this.props.children}</s.Main>
				
				    
			    </s.SideBarContainer>)
			  ;
	}
}

export default SideBar;