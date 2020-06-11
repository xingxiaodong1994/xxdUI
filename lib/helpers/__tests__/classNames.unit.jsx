import {fixClass} from "../classNames";

describe("fixClass",()=>{
  it('接受字符串或者对象',()=>{
    const sc = fixClass('xxdui-layout')
    expect(sc('')).toEqual('xxdui-layout');
    expect(sc("x")).toEqual('xxdui-layout-x');
    expect(sc({"r":true,"m":false})).toEqual('xxdui-layout-r');
    expect(sc({"r":true,"m":true})).toEqual('xxdui-layout-r xxdui-layout-m');
    expect(sc({"r":true,"m":true},{extra:"extraClass"})).toEqual('xxdui-layout-r xxdui-layout-m extraClass');
  });
});