import styled from 'styled-components';

export default function Button({content}){
    return <StyledButton>{content}</StyledButton>;
     
    
}

const StyledButton=styled.button`
background: linear-gradient(to right, #14163c 0%, #008080 85%);
display: inline-block;
margin:30px 0;
text-transform: uppercase;
letter-spacing: 0.2rem;
width:65%;
height: 3rem;
color: white;
border:1px solid white;
border-radius: 2rem;
cursor:pointer;
&:hover{
    background: #b2d8d8;
    color:black;
}
`;
