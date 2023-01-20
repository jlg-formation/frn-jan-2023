import {atom, selector} from 'recoil';
import {User} from '../interfaces/User';

export const userState = atom({
  key: 'userState', // unique ID (with respect to other atoms/selectors)
  default: undefined as User | undefined, // default value (aka initial value)
});

export const isConnectedSelector = selector({
  key: 'isConnected',
  get: ({get}) => {
    const user = get(userState);
    const result = user === undefined ? false : true;
    return result;
  },
});
