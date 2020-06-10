interface options {
    extra:string | undefined
}
// ts声明key:value的一种方式
interface ClassToggles {
    [K:string]:Boolean
}
const fixClass=(fixName:string)=>{

    return (name?:string | ClassToggles,options?:options)=>{
        let name2
        let result
        if(typeof name === "string" || name === undefined){
            name2=name
            result=[fixName,name2].filter(Boolean).join('-');
        }else {
            name2=Object.entries(name).filter(kv=>kv[1]).map(kv=>kv[0])
            result=name2.map(
              (n)=> [fixName,n].filter(Boolean).join('-')
            ).join(' ')
        }

        console.log('name2');
        console.log('result');

        console.log(name2);
        console.log(result);


        if(options&&options.extra){
            return[result,options.extra].filter(Boolean).join(' ');
        }
        return result
    }

};
export {fixClass}