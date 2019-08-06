// 测试icon组件
// 测试icon组件是否正常渲染。
import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import {mount} from 'enzyme'

describe('测试icon组件', () => {
  it('icon组件正常渲染', () => {
    const json=renderer.create(<Icon name='file' />).toJSON();
    expect(json).toMatchSnapshot()
  });
  it('icon组件onClick', () => {
    const fn=jest.fn();
    const c=mount(<Icon name='file' onClick={fn} />);
    c.find('svg').simulate('click');
    expect(fn).toBeCalled();
  })
});