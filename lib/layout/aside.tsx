import React from "react";
import {fixClass} from "../helpers/classNames";

const sc=fixClass("xxdui-layout");

interface Props extends React.HTMLAttributes<HTMLElement>{

}

const Aside: React.FunctionComponent<Props> = (props) => {
  const {className,...rest}=props;
  return (
    <div className={sc("aside",{extra:className})} {...rest}>
      {props.children}
    </div>
  );

};
Aside.defaultProps = {};
export default Aside;