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

const str = '/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/';

//   if(this.state.email.test(str)){
//    this.state.emailIsValid = true
   
//  }
 this.setState({ email: e.target.value });
 console.log(this.state.email);

  //  console.log("hello")

}
handlePasswordChange = (e) =>{
this.setState({ password: e.target.value });
console.log(this.state.password)


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
            <input type="mail" id='mail'  value={this.state.email} onChange={this.handleEmailChange}/>
      </label>
      <label>
          Mot de pass:
          <input type="password" value={this.state.password } onChange={this.handlePasswordChange} />
      </label>
      <input type="submit" />
  </form>

      </>
    )
  }
}

export default App;
