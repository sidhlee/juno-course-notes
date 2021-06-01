import { Component } from 'react';
import AccountPage from './AccountPage';
import './ClassComponents.scss';

export default class ClassComponents extends Component {
  render() {
    return (
      <div className="class-components">
        <h2>Class Components</h2>
        <AccountPage name={'Sid'} />
        <AccountPage name={'Ethan'} plan={'premium'} />
      </div>
    );
  }
}
