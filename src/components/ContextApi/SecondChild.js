import React from 'react';
import {  useRecoilValue } from 'recoil';
import { counterState } from './FirstChild';
function SecondChild() {
  const {count} = useRecoilValue(counterState);
  console.log(count)
  return (
    <h1>{count}</h1>
  );
}

export default SecondChild;
