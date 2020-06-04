import * as React from 'react';
import {Fragment, ReactElement} from 'react';
import './dialog.scss';
import Icon from '../icon/icon';
import {fixClass} from '../helpers/classNames';
import ReactDOM from 'react-dom';
interface Props {
  visible: boolean,
  style?:any,
  onClose: React.MouseEventHandler,
  mask?:boolean,
  closeOnClickMask?: boolean;
  children?:ReactElement;
}
const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };
  const sc = fixClass('xxdui-dialog');
  const returnNode= props.visible &&
    <Fragment>
      {props.mask && <div className={sc('mask')} onClick={onClickMask}/>}
      <div className={sc('page')} style={props.style}>
        <Icon name='close' className={sc('close')} onClick={onClickClose}/>
        {props.children}
      </div>
    </Fragment>;
  return (
    ReactDOM.createPortal(returnNode || null,document.body)
  );
};
Dialog.defaultProps = {
  closeOnClickMask: true,
  mask:true
};
const alert=(content:string)=>{
   const component=
     <Dialog visible={true} onClose={()=>{
       ReactDOM.render(React.cloneElement(component,{visible:false}),div);
       ReactDOM.unmountComponentAtNode(div);
       div.remove()
     }}>
       <div>{content}</div>
     </Dialog>;
  const div=document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component,div);

};
const Module=()=>{
  return <Dialog visible={true} onClose={()=>{}} />
};
export {alert,Module}
export default Dialog;