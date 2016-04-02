import React from 'react'
import Selector from './index'

export default class SelectorDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current1: 1,
      current2: 1
    }
  }
  render() {
    const opts1 = [
      { img: '/img/pic1.jpg', label: 'First Item', value: 1 },
      { img: '/img/pic2.jpg', label: 'Second Item', value: 2 },
      { img: '/img/pic3.jpg', label: 'Third Item', value: 3 }
    ]
    const onSelect1 = opt => { this.setState({ current1: opt.value }); console.log('selected', opt) }
    const opts2 = [
      { el: <div><strong>First</strong> El</div>, value: 1 },
      { el: <div><strong>Second</strong> El</div>, value: 2 },
      { el: <div><strong>Third</strong> El</div>, value: 3 }
    ]
    const onSelect2 = opt => { this.setState({ current2: opt.value }); console.log('selected', opt) }
    return <div>
      <h1>patchkit-selector</h1>
      <section className="selector-label-img">
        <header>&lt;Selector options=[&#123; img:, label:, value: &#125;, ...]&gt;</header>
        <div className="content">
          <Selector options={opts1} value={this.state.current1} onSelect={onSelect1} />
        </div>
      </section>
      <section className="selector-el">
        <header>&lt;Selector options=[&#123; el:, value: &#125;, ...]&gt;</header>
        <div className="content">
          <Selector options={opts2} value={this.state.current2} onSelect={onSelect2} />
        </div>
      </section>
    </div>
  }
}