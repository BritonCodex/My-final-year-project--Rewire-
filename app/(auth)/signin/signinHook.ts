import {useState} from 'react';
import { ISignInProps } from '../../types/types';

export const useSignin = (): ISignInProps => {
  const [isSecure, setIsSecure] = useState(false);
  return {
    isSecure,
    setIsSecure,
  };
};
