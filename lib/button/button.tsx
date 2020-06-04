import React from 'react';
import './button.scss';
import classNames from '../helpers/classNames';

interface Props {
  content: string
  type?:string
}
const Button: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={classNames("xxdui-button",props.type)}>
      {props.content}
    </div>
  );
};
export default Button;