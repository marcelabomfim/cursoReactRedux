import React from 'react'

export default props => {
  if (props.hide) {
    return null
  } else {
    const styles = props.style.split(' ')
    let styleClasses = 'btn'

    styleClasses += styles.map((style) => ' btn-' + style).join('')

    return (
      <button className={classes} onClick={props.onClick}>
        <i className={'fa fa-' + props.icon}></i>
      </button>
    )
  }
}