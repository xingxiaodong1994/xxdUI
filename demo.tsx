import * as React from 'react';
import Highlight,{defaultProps} from 'prism-react-renderer';
import { useState} from 'react';


interface Props {
  code:string;
}


const Demo:React.FunctionComponent<Props>= (props)=>{
  const [codeVisible,setCodeVisible]=useState(false);
  const code = (
    <Highlight {...defaultProps} language='tsx' code={props.code}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({line, key: i})}>
                {
                  line.map((token, key) => (
                    <span {...getTokenProps({token, key})}/>
                  ))
                }
              </div>
            ))}
          </pre>
      )}
    </Highlight>
  );
  return(
    <div>
      {props.children}
      <div>
        <button onClick={()=>setCodeVisible(!codeVisible)}>查看代码</button>
        {codeVisible && code}
      </div>

    </div>
  );
};

export default Demo;