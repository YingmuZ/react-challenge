import axios from 'axios';
import React, { Component } from 'react';


export class UserInfo extends Component {
    constructor(){
        super();
        this.state = {
            users: []
        }
        
    }
  
    componentDidMount = () => {
        axios.get('https://api.github.com/users/YingmuZ?client_id=598ecfd5ac566df1482f&client_secret=6b7876c672b16494eaaed374923b70ab98b448af&sort=created')
            .then( res => {
                this.setState({
                    users: res.data
                })
            })
            .catch( err => {
                console.log(err)
            })
            
            
    }

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            border: '1px #ccc dotted',
            width: '600px',
        }
    }

    render() {
        
        return (
            <div className='user-info-box'>
                <p style={this.getStyle()}>name: {this.state.users.name}</p>
                <p style={this.getStyle()}>username: {this.state.users.login}</p>
                <p style={this.getStyle()}>location: {this.state.users.location}</p>
                <p style={this.getStyle()}>email: {this.state.users.email}</p>
                <p style={this.getStyle()}>follower: {this.state.users.followers}</p>
            </div>
    )
  }
}

export default UserInfo
