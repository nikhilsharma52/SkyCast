import React from 'react';
import { useRecoilState } from 'recoil';
import { atom } from 'recoil';

export const counterState = atom({
  key: 'counterState',
  default: {},
});
function FirstChild(props) {
  const [count,setCount] = useRecoilState(counterState);
  const HandleClick=()=>{
    setCount({
      ...count,
      name:props.Data.name,
      class:props.Data.Class
    })
  }
  console.log(count)
  return (
    <div>
      <button onClick={HandleClick}>Increment</button>
    </div>
  );
}

export default FirstChild;
