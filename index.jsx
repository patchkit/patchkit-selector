import React from 'react'
import cls from 'classnames'

export default class Selector extends React.Component {
  render() {
    return <div className="selector">
      { this.props.options.map((o, i) => {
        const onClick = () => this.props.onSelect(o)
        return <div key={i} className={ cls({ option: true, selected: o.value === this.props.value }) } onClick={onClick}>
          { o.el }
          { o.label ? <div>{o.label}</div> : '' }
          { o.img ? <img src={o.img} /> : '' }
        </div>
      }) }
    </div>
  }
}