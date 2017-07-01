import styled from 'styled-components';
const styles={}
styles.TicTacToeContainer=styled.div`
display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;  
  
 
  flex-flow: column wrap;
  background: grey;
   width :50%;
   padding:10px;
`;
styles.TicTacToeCellContainer=styled.div`
display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;  
 
  flex-flow: row wrap;
  background: lightgrey;
  height:100px
   

`;
styles.TicTacToeCell=styled.div`
 flex: 1  ;
border:2px solid black;
padding:5px;
font-size:80px;

`;


export default styles;