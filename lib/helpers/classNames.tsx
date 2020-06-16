// 给class名加前缀的工具方法。具体用法请查看测试用例 classNames.unit.jsx
interface options {
    extra:string | undefined
}
// ts声明key:value的一种方式
interface ClassToggles {
    [K:string]:Boolean
}
const fixClass = (fixName: string) => {
    return (name: string | ClassToggles, options?: options) =>
      Object
        .entries((name instanceof Object) ? name : {[name]: name})
        .filter(kv => kv[1] !== false)
        .map(kv => kv[0])
        .map(
          n => [fixName, n].filter(Boolean).join('-')
        )
        .concat(options && options.extra || [])
        .join(' ');
};
export {fixClass}