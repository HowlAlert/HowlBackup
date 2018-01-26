import {
  EDIT_FIRST_NAME,

 } from './types';

 export const editFirstName = (text) => {
   return {
     type: EDIT_FIRST_NAME,
     payload: text
   };
 };


 
