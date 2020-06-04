const classNames=(...names:(string|undefined)[])=>{
    return names.filter(Boolean).join(' ')
};
export default classNames

const fixClass=(fixName:string)=>{
    return (className?:string)=>{
        if(className ){
            return `${fixName}-${className}`
        }
        return fixName
    }
};
export {fixClass}