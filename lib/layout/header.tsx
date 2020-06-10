import React from 'react';
import {fixClass} from '../helpers/classNames';
const sc=fixClass('xxdui-layout');

interface Props extends React.HTMLAttributes<HTMLElement>{

}
const Header: React.FunctionComponent<Props> = (props) => {
  const {className,...rest}=props;
  return (
    <div className={sc('header',{extra:className})} {...rest}>
      {props.children}
    </div>
  )
};
Header.defaultProps = {};
export default Header;