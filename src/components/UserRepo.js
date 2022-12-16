import axios from 'axios';
import React, { Component } from 'react'

export class UserRepo extends Component {
    constructor(){
        super();
        this.state = {
            repos: []
        }
    }

    componentDidMount = () => {
        axios.get('https://api.github.com/users/YingmuZ/repos')
            .then( res => {
                this.setState({
                    repos: res.data
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
            width: '1150px',
        }
    }

    render() {
        return (
        <div className='repo-info-box'>
            <h2>user repositories</h2>
            <br/>
            {this.state.repos && this.state.repos.map( repo => {
                return (
                    <p style={this.getStyle()} key={repo.id}> 
                    <a href={repo.html_url}>{repo.name}</a> : {repo.html_url} </p>
                )
            })}


        </div>
        )
    }
}

export default UserRepo
