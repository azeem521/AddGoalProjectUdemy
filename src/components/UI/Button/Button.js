import React, { useState } from 'react';

import styles from './Button.module.css';
// import styled from 'styled-components';


// const Button=styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   };

// &:focus {
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }

// `




const Button = props => {
  const [check,setCheck]=useState(true)
  // let check=true;
  // if(props.valid.trim().length===0){
  //   // check=false
  //   setCheck(false)
  // }
  // if(props.valid.trim().length>0){
  //   // check=true
  //   setCheck(true)
  // }
  const checkHandler=()=>{
    if(props.valid.trim().length===0){
      //   // check=false
      console.log('yess');
       return setCheck(false)
      // }
      // if(props.valid.trim().length>0){
      //   // check=true
      //  return setCheck(true)
      }else{
        setCheck(true)
        return;
      }
  }
  const changeHandler=()=>{
    if(props.valid.trim().length!==0){
      //   // check=false
      console.log('in change handler yess');
       return setCheck(true)
    }
  }
  console.log(check); ///buttonEmpty

  return (
    <button type={props.type} className={`${styles.button} ${!check && styles.buttonEmpty}`} onClick={props.onClick} onClick={checkHandler} onChange={changeHandler}>
      {props.children}
    </button>
  );
};

export default Button;
