import * as React from 'react';
import {Fragment, ReactElement} from 'react';

import './layout.scss';
import {fixClass} from '../helpers/classNames';
import Aside from './aside';
import Header from './header';
import Content from './content';
import Footer from './footer';

const sc=fixClass('xxdui-layout');

interface Props extends React.HTMLAttributes<HTMLElement>{
  children:ReactElement | Array<ReactElement>
}
const Layout: React.FunctionComponent<Props> = (props) => {
  const {className,...rest}=props;
  console.log('props.children');
  const childAsArray=props.children as Array<ReactElement>;
  // 遍历节点数组，当发现节点里有侧边栏时，把hasAside变为true
  const hasAside='length' in childAsArray &&
    childAsArray.reduce((result,item)=>{return result || item.type===Aside;},false);

  return (
    <Fragment>
      <div className={sc({'':true,hasAside},{extra:className})} {...rest}>
        {props.children}
      </div>
    </Fragment>

  );
};
Layout.defaultProps = {

};

export default Layout;
export {Layout,Header,Aside,Content,Footer};