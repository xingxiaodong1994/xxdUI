import React, {useEffect, useState} from 'react';

interface Props {
  message?: string
}


const Xxd: React.FunctionComponent<Props> = (props) => {
  Xxd.defaultProps = {
    message: 'andy1994',
  };
  Xxd.displayName = 'andy';
  const [n, setN] = useState(1);
  const x = () => {
    setN(n + 1);
  };

  // const array:string[]=props.message!.split("");


  useEffect(() => {
    console.log('mounted，');
    return () => {
      console.log('unmount');
    };
  }, []);

    useEffect(()=>{
        console.log("n改变")
        // 如何区分mounted 和 updated
    },[n]);

    return (
      <div>
          <div>{props.message}</div>
          <div>{n}</div>
          <button onClick={x}>+1</button>
      </div>)
};

export default Xxd;