// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends react.Component {
    constructor() {
      super();
      this.state = {
        timesClicked: 0
      }
    }

    handleClick = () => {
      this.setState({
        timesClicked: ++this.state.timesClicked
      })
    }
}
