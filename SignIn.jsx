import styled from 'styled-components';
import Input from './components/Input';
import Button from './components/Button';

function SignIn() {
  return <MainContainer>
    <Questry>Welcome to Questry</Questry>
    <WelcomeText>LOGIN</WelcomeText>
    <InputContainer>
    <Input type="text" placeholder="Email" />
    <Input type="password" placeholder="Password" />
    </InputContainer>
    <ButtonContainer>
      <Button content="Sign In"/>
    </ButtonContainer>
    <NoAccount>Don't have an account?</NoAccount>
    <ButtonContainer>
      <Button content="Create Account"/>
    </ButtonContainer>
  </MainContainer>;
    
}

const MainContainer= styled.div`

display: flex;
align-items: center;
flex-direction: column;
height: 80vh;
width:30vw;
background: rgba(255,255,255,0.15);
box-shadow: 0 8px 32px 0 rgba(31,160,135,0.377);
background-filter: blur(9.5px);
border-radius:10px;
color: #ffffff;
text-tranform: uppercase;
letter-spacing: 0.4rem;
`;

const Questry= styled.h1`
margin:3rem 0 2rem 0;
text-alignment: center;
justify-content:center;
align-items: center;
letter-spacing: 0rem;
`;

const WelcomeText=styled.h2`
margin:1rem 0 2rem 0;
`;

const InputContainer= styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 20%;
width: 100%;
`;

const ButtonContainer=styled.div`
margin:1rem 0 2 rem 0;
width:100%;
display:flex;
align-items:center;
justify-content:center;
`;

const NoAccount= styled.h5`
letter-spacing: 0rem;
cursor:pointer;
`;




export default SignIn;
