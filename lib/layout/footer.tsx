import React from 'react';
import {fixClass} from '../helpers/classNames';

const sc=fixClass('xxdui-layout');


interface Props extends React.HTMLAttributes<HTMLElement>{

}
const Footer: React.FunctionComponent<Props> = (props) => {
  const {className,...rest}=props;
  return (
    <div className={sc('footer',{extra:className})} {...rest}>
      {props.children}
    </div>
  )
};
Footer.defaultProps = {};
export default Footer;