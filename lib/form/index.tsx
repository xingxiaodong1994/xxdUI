import React, {useState} from 'react';
import './index.scss';
import {fixClass} from '../helpers/classNames';
const sc=fixClass('xxdui-form');

interface Props {
  type?:string
}
const Form: React.FunctionComponent<Props> = (props) => {

  const [n,setN] = useState(0);


  return (
    <div className={sc("")}>
      {n}
      <br/>
      <button onClick={()=>setN((n)=>n+1)}> +1</button>
      <br/>
      {'form'}
    </div>
  );
};
export default Form;