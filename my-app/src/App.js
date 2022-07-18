import React from 'react'
import  './App.css'

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

  if ( regex.test(e.target.value)) {
      this.setState({ emailIsValid: true });
  }

 this.setState({ email: e.target.value });
console.log("mail:",this.state.email);
}
handlePasswordChange = (e) =>{

  const long1 = this.state.password.split(' ')
  const long2 =  long1.length
  if(long2 >= 5){
    this.setState({passwordIsValid: true})
     this.setState({ password: e.target.value });
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
      <label >
            Adress mail:
            <input type="mail" className='input' id='mail'  value={this.state.email} onChange={this.handleEmailChange}/>
      </label><br/>
      <label>
          Mot de pass:
          <input type="password"  className='input' value={this.state.password } onChange={this.handlePasswordChange} />
      </label><br/>

      <input type="checkbox" name='remember Me' id='remember Me' className='input'/>
      <label>remember me</label><br/>

      <input type="submit" />
  </form>

      </>
    )
  }
}

export default App;
