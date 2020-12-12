import React from 'react';
import {fixClass} from '../helpers/classNames';

const sc=fixClass('xxdui-layout');


interface Props extends React.HTMLAttributes<HTMLElement>{

}
const Content: React.FunctionComponent<Props> = (props) => {
  const {className,...rest}=props;
  return (
    <div className={sc('content',{extra:className})} {...rest}>
      {props.children}
    </div>
  )
};
Content.defaultProps = {};
export default Content;