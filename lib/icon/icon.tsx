import React from 'react';
import './importIcons';
import './icon.scss'
import classNames from '../helpers/classNames';
interface IconProps extends React.SVGAttributes<SVGElement>{
}


const Icon:React.FunctionComponent<IconProps>=({className,name,...restProps}:IconProps)=>{
  return (
      <svg className={classNames("xxdui-icon",className)} {...restProps}>
          <use xlinkHref={`#${name}`}/>
      </svg>
  )
};

export default Icon