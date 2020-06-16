import React, {Fragment} from 'react';
import Button from './button';

const ButtonExample: React.FunctionComponent = () => {
  return (
    <Fragment>
        <Button content={'xxx'}/>
        <Button content={'yyy'} type="red"/>
    </Fragment>

  );
};

export default ButtonExample;