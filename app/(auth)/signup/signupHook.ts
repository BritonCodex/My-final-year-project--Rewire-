import {useState} from 'react';
import { ISignUpProps } from '../../types/types'; 

export const useSignup = (): ISignUpProps => {
  const [isSecure, setIsSecure] = useState(false);
  return {
    isSecure,
    setIsSecure,
  };
};