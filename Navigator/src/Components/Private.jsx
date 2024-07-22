import React from 'react';
import Login from './Login';

const Private = ({children}) => {
 
   const isauth=localStorage.getItem("token")

   if(!isauth){
    alert("you are not logged in !!")
    window.location.href='/login'
   }
   else{
    return children
   }


}

export default Private;
