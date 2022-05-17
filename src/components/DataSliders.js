import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import InputNumber from 'react-input-number';

import 'react-rangeslider/lib/index.css'

class DataSliders extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      height: 0,
      weight: 0
    }
  }

  handleHeightOnChange = (value) => {
    this.setState({
        height: value
    })
    this.props.onUpdateValues(this.state)
  }

  handleWeightOnChange = (value) => {
    this.setState({
        weight: value
    })
    this.props.onUpdateValues(this.state)
  }

  render() {
    let { height } = this.state
    let { weight } = this.state
    return (
    <div>
        <p>height</p>
        <Slider
            min={50}
            max={300}
            value={height}
            orientation="horizontal"
            onChange={this.handleHeightOnChange}
        />
        <input
        type="number"
        min={50}
        max={300}
        step={1}
        value={height}
        onChange={e => this.handleHeightOnChange(e.target.value)}
      />
        <p>weight</p>
        <Slider
            min={25}
            max={200}
            value={weight}
            orientation="horizontal"
            onChange={this.handleWeightOnChange}
        />
        <input
        type="number"
        min={25}
        max={200}
        step={1}
        value={weight}
        onChange={e => this.handleWeightOnChange(e.target.value)}
      />
    </div>
    )
  }
}

export default DataSliders;