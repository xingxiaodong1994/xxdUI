import React from "react";
import {fixClass} from "../helpers/classNames";

const sc=fixClass("xxdui-form");

interface Props extends React.HTMLAttributes<HTMLElement>{

}

const Form: React.FunctionComponent<Props> = (props) => {
  const {className,...rest}=props;
  return (
    <div className={sc("",{extra:className})} {...rest}>
      {props.children}
      form
    </div>
  );

};
export default Form;
export  {Form};