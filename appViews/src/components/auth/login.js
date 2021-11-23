import React, { Component } from 'react';
import Button from 'react-bootstrap/button';

export class Login extends Component{
    constructor(){
        super();
        this.state ={
            username:'',
            password:'',
            remember_me :false,
            isSubmmiting : false,
        }

    }
    handleChange = (event) => {
        console.log('changed>>',event.target)
        const {type,name,value} = event.target;
        console.log("name>>",type);
        console.log("value",value);

        this.setState({
            [name]: value
        },() => {
            console.log('updated state',this.state)
        })
    }
    handleSubmit = (e) => {
        
        
        this.setState({isSubmmiting: false});
        console.log('this state>>',this.state)
        
        
               setTimeout( this.setState({isSubmmiting: true}),10000);
               console.log('this state>>',this.state);
        
    }
    render(){
        let btn =this.state.isSubmmiting
        ?  <Button className="btn btn primary" disabled>Loggingin......</Button>
        : <Button className ="btn btn secondary">login</Button>
        return(<div>
            <h2>Login</h2>
            <p>Login to Start Your Travel Blogs</p>
            <form onSubmit ={this.handleSubmit}>
                <label htmlFor="username ">Username</label>
                <input type="text" name="username" placeholder="Username" id="username" onChange={this.handleChange}></input>
                <br />
                <label htmlFor="password" >Password</label>
                <input type="password" name="password" placeholder="password" id="password" onChange={this.handleChange}></input>
                <br />
                {btn}
                <p>Don't Have an account</p>
                <p>Register</p><a href='/register'>here</a>
            </form>
        </div>  
            )

    }
}