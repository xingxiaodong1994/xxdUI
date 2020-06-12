function add(a: number, b: number) {
    return a + b
}
describe('我的第一个测试用例', () => {
    it('add(1,2) 等于3', () => {
        expect(add(1,2)).toEqual(3);
    })
});

const  pick=(form:object,keys:Array<string>)=>Object.entries(form)
                        .filter(([key])=>keys.includes(key))
                        .reduce(
                          (accumulate:object,[key,value])=>({...accumulate,[key]:value}),
                          {}
                        );
describe(
  "测试用例",()=>{
      it("筛选出数组里想要的属性",()=>{
          expect(pick({a:'a',b:'b',c:'c'},['a','b'])).toEqual( {"a": "a", "b": "b"})
      })
  }
);