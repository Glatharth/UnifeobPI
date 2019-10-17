import styled, {keyframes} from 'styled-components';

const fade = keyframes`
  from{
    opacity: 0.5;
    transform: scale(0.9)
  }to {
    opacity: 1;
    transform: scale(1)
  }
`;

const moveP = keyframes`
  from{
    opacity: 0;
    transform: translateX(-35%)
  }to {
    opacity: 1;
    transform: translateX(0%)
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  animation: ${fade} 0.5s;

  width: 100%;
  max-width: 400px;
  padding: 18px 6% 18px 6%;
  overflow: hidden;
  background: rgba(256, 256, 256, 0.85);
  border: 2px solid rgba(0,0,0,0.8);
  border-radius: 5px;

  h1{
    font-size: 48px;
    color: rgb(0,0,0,0.8);
    padding: 10px 0;
    font-family: auto;
    font-weight: bold;
    text-align: center;
    padding-bottom: 30px;
  }

  p{
    margin-bottom:15px;
    color: rgba(0,0,0,0.8);
    font-size: 20px;
  }

  p[name="p1"] {
    animation: ${moveP} 0.5s backwards;
    animation-delay: 0.2s;
  }

  p[name="p2"] {
    animation: ${moveP} 0.5s backwards;
    animation-delay: 0.5s;
  }

  p[name="p3"] {
    animation: ${moveP} 0.5s backwards;
    animation-delay: 1s;
  }

  input:not([type="checkbox"]){
  width: 95%;
  margin-top: 4px;
  padding: 10px;    
  border: 1px solid #b2b2b2;
  font-size: 16px;
  background: rgba(256,256,256, 0.7);

  -webkit-border-radius: 3px;
  border-radius: 3px;
  
  -webkit-box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  box-shadow: 3px 3px rgba(168, 168, 168, 0.6);

  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

  input[type="submit"]{
    width: 100%!important;
    cursor: pointer;  
    background: rgba(0,0,0,0.8);
    padding: 8px 5px;
    color: rgba(256, 256, 256, 0.85);
    font-size: 20px;  
    border: 1px solid #fff;   
    margin-bottom: 10px;  
    text-shadow: 0 1px 1px #333;
    
    -webkit-border-radius: 5px;
    border-radius: 5px;
    box-shadow: none;
    
    transition: all 0.2s linear;
  }
  input[type="submit"]:hover{
    background: rgba(0,0,0,0.7);
  }

`;