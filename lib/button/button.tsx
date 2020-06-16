import React from 'react';
import './button.scss';
import {fixClass} from '../helpers/classNames';
const sc=fixClass('xxdui-button');

interface Props {
  content: string
  type?:string
}
const Button: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={sc(props.type || "")}>
      {props.content}
    </div>
  );
};
export default Button;