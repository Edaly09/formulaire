import React from 'react'

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
	this.setState({ email: e.target.value });
 

}
handlePasswordChange = (e) =>{
this.setState({ password: e.target.value });


}
handleSubmit = (e) =>{
  e.preventDefault()
}
  render(){
    return(
      <>
  <form onSubmit={this.handleSubmit}>
      <label>
            Adress mail:
            <input type="mail" id='mail' onChange={this.handleEmailChange} value={this.state.email}/>
      </label>
      <label>
          Mot de pass:
          <input type="password" onChange={this.handlePasswordChange} value={this.state.password }/>
      </label>
      <input type="submit" />
  </form>
      </>
    )
  }
}

export default App;
