import styled from 'styled-components';
import Input from './components/Input';
import Button from './components/Button';

function SignUp() {
  return <MainContainer>
    <Questry>Welcome to Questry</Questry>
    <WelcomeText>REGISTER</WelcomeText>
    <InputContainer>
    <Input type="text" placeholder="Name" />
    <Input type="text" placeholder="Email" />
    <Input type="password" placeholder="Password" />
    </InputContainer>
    <ButtonContainer>
      <Button content="Sign Up"/>
    </ButtonContainer>
    <NoAccount>Go back and Sign In</NoAccount>
    <ButtonContainer>
      <Button content="Sign In"/>
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
margin:1rem 0 2rem 0;
text-alignment: center;
justify-content:center;
align-items: center;
letter-spacing: 0rem;
`;

const WelcomeText=styled.h2`
margin:0 0 2rem 0;
`;

const InputContainer= styled.div`
margin:2rem 0 2rem 0; 
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 20%;
width: 100%;

`;

const ButtonContainer=styled.div`
margin:2rem 0 2 rem 0;
width:100%;
display:flex;
align-items:center;
justify-content:center;
`;

const NoAccount= styled.h5`
letter-spacing: 0rem;
cursor:pointer;
`;




export default SignUp;
