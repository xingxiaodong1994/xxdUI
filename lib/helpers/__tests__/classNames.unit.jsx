import classNames from "../classNames";

describe("classNames函数", () => {
  it('输入一个class', () => {
    const result = classNames('file');
    expect(result).toEqual('file');
  });
  it('输入2个class', () => {
    const result = classNames('file', 'chart');
    expect(result).toEqual('file chart');
  });
  it('输入undefined，null 作为class', () => {
    const result = classNames('file', null, "亚静", '');
    expect(result).toEqual('file 亚静');
  });
});