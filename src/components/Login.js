import React from 'react';
import { styled ,keyframes,css} from 'styled-components';
import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const {httpAddUser} = require('../userFetcher')


const Login = () => {
  const {login, logout, logged} = useAuth();
  const [action,setAction] = useState("Sign Up");
  const [form,setForm] = useState({
    name:'',
    email:'',
    password:'',
    touched: {
    name:false,
    email:false,
    password: false
    }
  });
  const navigate=useNavigate();

  // const errors = {
  //   name: form.name.length === 0,
  //   email: form.email.length === 0,
  //   password: form.password.length < 6
  // };
  const SignUpErrors = {
    name: form.name.length === 0,
    email: form.email.length === 0,
    password: form.password.length < 6
  };
  
  const LoginErrors = {
  
    email: form.email.length === 0,
    password: form.password.length < 6
  };
  
  // const SDisabled = Object.keys(SignUpErrors).some((x) => SignUpErrors[x]);
  // const LDisabled = Object.keys(LoginErrors).some((x)=> LoginErrors[x]);
  const disabled = () => {
    if(action==='Sign Up'){
     return Object.keys(SignUpErrors).some((x)=> SignUpErrors[x]);
    }
    else{
     return Object.keys(LoginErrors).some((x)=> LoginErrors[x]);
    }
  };

  const handleChange = (ev) => {
    const {name,value} = ev.target;
    setForm((prevState) => {
      return{
        ...prevState,
        [name]: value
      };
    });
    if (name === 'password') {
      ev.target.setCustomValidity('');
    }

    if (name === 'name') {
      ev.target.setCustomValidity('');
    }
  }

  // useEffect(() => {
  //   if(logged){
  //     console.log('hello');
  //     debugger;
  //     navigate(-1);
  //     debugger;
  //   }
  // },[logged,navigate]);

  // const handleSubmit = async(ev) => {
  //     if(disabled()){
  //       ev.preventDefault();
  //       return;
  //     }
  //   await login();
  //   debugger;
  //   navigate(-1);
  //   };

  const handleSubmit =  (ev) => {
    ev.preventDefault();
  
    if (disabled()) {
      return;
    }

    
    login();
    try{
    const user = {
      name: form.name,
      email: form.email,
      password: form.password,
    }

    await httpAddUser(user);

    navigate(-1);
    }
    catch(err) {
      console.error('Failed to add user: ',error)
    }
  };
  
  const handleBlur = (ev) => { 
    const {name,value} = ev.target;
    setForm((prevState) => {
      return{
      ...prevState,
      touched: {...form.touched,[name]:true}
      };
    });

    if (name === 'email' && !ev.target.validity.valid) {
      ev.target.setCustomValidity('Please enter a valid email address');
    }
    else {
      ev.target.setCustomValidity('');
    } 
    if (name === 'password' && value.length < 6) {
      ev.target.setCustomValidity('Password must be at least 6 characters long');
    } else {
      ev.target.setCustomValidity('');
    }

    if(name === 'name' && value.length === 0){
      ev.target.setCustomValidity('Enter your name');
    }
    else ev.target.setCustomValidity('');

  }
  const showError = (field) => {
    if (action === 'Sign Up') {
      return SignUpErrors[field] && form.touched[field];
    } 
    else {
      return LoginErrors[field] && form.touched[field];
    }
  };
  
  

  return (
    <form onSubmit={handleSubmit}>
  <Page>
  <Nav><NavText>mSt Store</NavText></Nav>
    <Container>
      <Header>
        <New>
        <Signup action={action} onClick={() => {setAction('Sign Up')}}>
          Sign Up
          {/* <Underline /> */}
        </Signup >
        <LogIn action={action} onClick={() => {setAction('Login')}}>
          Login
          {/* <Underline /> */}
        </LogIn>
        </New>
        
        <Inputs>
        {action === 'Login' ? <div></div> : <Input>
        <img src="assets/person.png" alt="" />
        <Inp type="name" name='name'placeholder='Name' onChange={handleChange} onBlur={handleBlur} invalid={showError('name')} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"/>
        {/* {showError('name') &&(
          <span>{errorMessages.name}</span>
        )} */}
        </Input> }
        
        <Input>
        <img src="assets/email.png" alt="" />
        <Inp type="email" name='email' placeholder='Email Id' onChange={handleChange} onBlur={handleBlur} invalid={showError('email')} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"/>
        
        </Input>
        <Input>
        <img src="assets/password.png" alt="" />
        <Inp type="password" name='password' placeholder='Password' onChange={handleChange} onBlur={handleBlur} minLength="6" invalid={showError('password')} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"/>
        {/* {showError('password') &&(Login
          <span>{errorMessages.password}</span>
        )} */}
        </Input>
        </Inputs>
      </Header>
      {action === 'Sign Up' ? <div></div> :  <Forgot>Forgot Password? <span>Click Here!</span></Forgot>}
     
      <SubmitContainer>
        <Submit>{action}</Submit>
        {/* <LoginSubmit action={action} onClick={() => {setAction('Login')}}>Login</LoginSubmit> */}
      
      </SubmitContainer>
    </Container>
   
  </Page>Login
  </form>
  );
};

export default Login;

const Page = styled.div `
  // background: linear-gradient( #2A00B7, #42006C);
//   background: rgb(2,0,36);
// background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
background: rgb(10,4,121);
background: linear-gradient(90deg, rgba(10,4,121,1) 0%, rgba(0,0,156,1) 35%, rgba(0,212,255,1) 100%);
height: 100vh;
  width: 100vw;
  // padding-top: 50px;
`;
const Nav = styled.div`
background-color: rgb(3, 16, 44);
text-align: center;
  font-size: 25px;
  color: white;
  height: 58px;

`
const NavText=styled.div`
padding-top: 10px;
padding-right: 65px;
`
const Container = styled.div `
  display:flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  width: 420px;
  height: 340px;
  align-items: center;
  // margin: auto;
  margin-top: 80px;
  padding-bottom: 20px;
  padding-top: 10px;
  margin-left: 400px;
  margin-right: 420px;
  margin-bottom: 20px;
  background: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`
const Header = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 80px;
  gap: 9px;

`;

const Underline = styled.div `
  width: 80px;
  height: 3px;
  background:#3c009d;
  border-radius: 9px;
`;

const Inputs = styled.div `
  margin-top: 0px;
  // display: flex;
  // flex-direction: column;
  gap: 25px;
`;

const Input = styled.div `
  display: flex;
  align-items: center;
  margin: auto;
  width: 380px;
  height: 55px;
  border-radius: 6px;
  padding-top:30px;
  & img{
    margin: 0px 30px;
    margin-left: 12px;
  }
  `
const vibrationAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(5px); }
`;
const Inp = styled.input`
  background: transparent;
  border: ${(props) => (props.invalid ? '1.5px solid red' : 'none')}; /* Add border styling based on the invalid prop */
  outline: none;
  height: 35px;
  width: 300px;
  color: #797979;
  font-size: 18px;
  box-sizing: border-box;
  margin-right: 10px;
  animation: ${(props) => (props.invalid ? css`${vibrationAnimation} 0.3s ease-in-out forwards` : 'none')};
`;

// const Inp = styled.input`
//   background: transparent;
//   border: none;
//   outline: none;
//   height: 100px;
//     width: 300px;
//     color: #797979;
//     font-size: 19px; 
// `
   
    


const SubmitContainer = styled.div`
  display: flex;
  gap: 30px;
  margin: 25px auto;
`
const New = styled.div`
  display: flex;
  justify-content: space-between;
  gap:175px;
` 
const Signup = styled.div`
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;

  color: ${(props) => (props.action === 'Sign Up' ? '#3c009d' : '#676767')};

transition: color 0.5s ease-out;

&:hover {
  color:blue;
}
`

const LogIn = styled.div `
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;

  color: ${(props) => (props.action === 'Login' ? '#3c009d' : '#676767')};

transition: color 0.5s ease-out;

&:hover {
  color:blue;
}
`;

const Submit = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 19px;
  color: #fff; 
  background: ${(props) => (props.reaction? '#797979' : '#4c00b4')};
  border: none;
  margin-bottom: 50px;
`
const Forgot = styled.div `
  margin-top: 27px;
  color: #797979;
  font-size: 18px;

  & span{
    color: #4c00b4;
    cursor: pointer;
  }
`


