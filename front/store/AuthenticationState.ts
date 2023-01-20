import {atom} from 'recoil';

export const authenticationState = atom({
  key: 'isConnected', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
