import { Component } from "react";
class UserClass extends Component{
    constructor(){
        super()
        this.state={
            username:"Mohamed Mustafa",
            age:23,

        }
    }
    change(name){
        this.setState({
        
            username : name
        })
    }
    render(){
        return(
            <>
               hi {this.state.username}
               <button onClick={()=>{this.change('Mohamed Mustafa Abdeltwab')}}>Change</button>
            </>
        )
    }
}

export default UserClass 