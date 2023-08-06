import { atom } from 'recoil';

export const counterState = atom({
  key: 'counterState',
  default: { 
    temp:0,
    Pressure:0
  },
});