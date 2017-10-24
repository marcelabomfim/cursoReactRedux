import React from 'react'
import If from './if'

export default props => (
  <If test={!props.hide}>
    <button className={
        'btn' + 
        props.style.split(' ').map((style) => ' btn-' + style).join('')
      } onClick={props.onClick}>
      <i className={'fa fa-' + props.icon}></i>
    </button>
  </If>
)