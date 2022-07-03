import React from 'react'

export default class Cat extends React.Component {
  render() {
    const ravi = this.props.ravi;
    return (
      <>
      <h1>Moving Cursor</h1>
      <h1>X:{ravi.x} , Y:{ravi.y}</h1>
        <span style={{position:"absolute", top: ravi.y, left : ravi.x}}> Move</span>
      </>
    )
  }
}
