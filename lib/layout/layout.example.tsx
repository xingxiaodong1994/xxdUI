import React, {Fragment} from 'react';
import Layout from './layout';
import Content from './content';
import Header from './header';
import Footer from './footer';
import Aside from './aside';

interface Props {

}
const LayoutExample: React.FunctionComponent<Props> = (props) => {
  return (
    <Fragment>
      <div>
        <h1 >第一个例子</h1>
        <Layout style={{height:300,width:500}}>
          <Header style={{background:"#aaa"}}>header</Header>
          <Content>content</Content>
          <Footer style={{background:"#aaa"}}>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1 >第二个例子</h1>
        <Layout style={{height:300,width:500}}>
          <Header style={{background:"#aaa"}}>header</Header>
          <Layout>
            <Aside style={{background:"lightgreen"}}>侧边栏</Aside>
            <Content>content</Content>
          </Layout>
          <Footer style={{background:"#aaa"}}>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1 >第三个例子</h1>
        <Layout style={{height:300,width:500}} onClick={()=>{console.log("layout被点击")}}>
          <Aside onClick={()=>{console.log("侧边栏被点击")}} style={{background:"lightgreen"}}>侧边栏</Aside>
          <Layout>
            <Header style={{background:"#aaa"}}>header</Header>
            <Content>content</Content>
            <Footer style={{background:"#aaa"}}>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </Fragment>

  );
};

export default LayoutExample;