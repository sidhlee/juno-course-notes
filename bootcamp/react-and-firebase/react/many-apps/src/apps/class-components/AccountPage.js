import { Component } from 'react';

export default class AccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = { time: null };
  }

  componentWillUnmount() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  handleTimeButtonClick = () => {
    this.timeInterval = setInterval(() => {
      this.tick();
    }, 1000);

    this.tick();
  };

  tick = () => {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  };

  render() {
    const { name } = this.props;
    const { time } = this.state;
    return (
      <section>
        <h2>{name}'s Account</h2>
        <button onClick={this.handleTimeButtonClick}>
          {time ? time : 'Show Time'}
        </button>
      </section>
    );
  }
}
