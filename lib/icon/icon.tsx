import React from 'react';
import './importIcons';
import './icon.scss'
import {fixClass} from '../helpers/classNames';
const sc=fixClass('xxdui-icon');
interface IconProps extends React.SVGAttributes<SVGElement>{
}

const Icon:React.FunctionComponent<IconProps>=({className,name,...restProps}:IconProps)=>{
  return (
      <svg className={sc('',{extra:className})} {...restProps}>
          <use xlinkHref={`#${name}`}/>
      </svg>
  )
};

export default Icon