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

  const regex = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/);

  if (regex.test(e.target.value)) {
      this.setState({ emailIsValid: true });
  }

 this.setState({ email: e.target.value });
console.log("mail:",this.state.email);
}
handlePasswordChange = (e) =>{
   let length = 10
  if(length < 5){
  alert('mot de pass non valid')
  }
  else{
    this.setState({ password: e.target.value });
    this.setState({passwordIsValid: true})
console.log("password:" ,this.state.password);


  }

}
handleSubmit = (e) =>{
  e.preventDefault()
  console.log("Adress:", this.state.email,   "et Mot de pass:", this.state.password);
  if(this.state.emailIsValid && this.state.passwordIsValid){
    this.setState({isSubmitted: true})
  }
  console.log(this);

}

  render(){

    return(
      <>
  <form onSubmit={this.handleSubmit}>
      <label>
            Adress mail:
            <input type="mail" id='mail'  value={this.state.email} onChange={this.handleEmailChange}/>
      </label><br/>
      <label>
          Mot de pass:
          <input type="password" value={this.state.password } onChange={this.handlePasswordChange} />
      </label><br/>

      <input type="checkbox" name='remember Me' id='remember Me'/>
      <label>remember me</label><br/>

      <input type="submit" />
  </form>

      </>
    )
  }
}

export default App;
