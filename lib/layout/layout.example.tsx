import React, {Fragment} from 'react';
import Layout from './layout';
import Content from './content';
import Header from './header';
import Footer from './footer';
import Aside from './aside';
import './layout.example.scss'

interface Props {

}
const LayoutExample: React.FunctionComponent<Props> = (props) => {
  return (
    <Fragment>
      <div>
        <h1 >第一个例子</h1>
        <Layout className='firstExample'>
          <Header className='header'>header</Header>
          <Content className='content'>content</Content>
          <Footer className='footer'>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1 >第二个例子</h1>
        <Layout className='firstExample'>
          <Header className='header'>header</Header>
          <Layout>
            <Aside className='aside'>aside</Aside>
            <Content className='content'>content</Content>
          </Layout>
          <Footer className='footer'>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1 >第三个例子</h1>
        <Layout className='firstExample'>
          <Aside className='aside'>aside</Aside>
          <Layout>
            <Header className='header'>header</Header>
            <Content className='content'>content</Content>
            <Footer className='footer'>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </Fragment>

  );
};

export default LayoutExample;