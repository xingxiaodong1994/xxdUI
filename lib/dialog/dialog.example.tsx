import React, {Fragment, useState} from 'react';
import Dialog, {alert} from './dialog';

interface Props {

}
const DialogExample: React.FunctionComponent<Props> = (props) => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div>
        example1
        <button onClick={() => {setShow(!show);}}>click</button>
        <Dialog
          visible={show}
          style={{width:"500px",height:'200px'}}
          closeOnClickMask={true}
          onClose={() => {setShow(false);}}
        >
          <div>example1</div>
        </Dialog>
      </div>
      <div>
        example2
        <button onClick={() => {alert('ni hao');}}>click</button>
      </div>
    </Fragment>

  );
};

export default DialogExample;