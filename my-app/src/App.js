import React from 'React'

class App extends React.Component{
constructor(){
  super()
  this.state = {
    email: "",
    password: "",
    rememberMe: false,
    emailIsValid: false,
    passwordIsValid: false,
    isSubmitted: false
  }
}
handleEmailChange = (e) =>{
// this.setState({})
console.log("je change mon password", e.target);
}
handlePasswordChange = (e) =>{
  console.log("je change mon password", e.target);
}
  render(){
    return(
      <>
  <form>
      <label>
            Name:
            <input type="mail" onChange={this.handleEmailChange}/>
      </label>
      <label>
          Mot de pass:
          <input type="password" onChange={this.handlePasswordChange}/>
      </label>
      <button><input type="submit"/></button>
  </form>
      </>
    )
  }
}

export default App;
