import * as React from 'react';
import {Fragment, ReactElement} from 'react';
import './layout.scss';
interface Props {
  children?:ReactElement;
}
const Layout: React.FunctionComponent<Props> = (props) => {

  return (
    <Fragment>
      <div>layout</div>
      {props.children}
    </Fragment>

  );
};
Layout.defaultProps = {

};


export default Layout;