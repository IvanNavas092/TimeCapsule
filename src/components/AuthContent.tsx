import { request } from '@/axios_helper';
import React from 'react';

interface AuthContentState {
  data: unknown[];
}

export default class AuthContent extends React.Component<object, AuthContentState> {
  constructor(props: object) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    request('GET', '/users', {}).then((response) => {
      this.setState({ data: response.data as unknown[] });
    });
  }

  render() {
    return (
      <div>
        {this.state.data &&
          this.state.data.map((line, idx) => (
            <p key={idx}>{typeof line === 'string' ? line : JSON.stringify(line)}</p>
          ))}
      </div>
    );
  }
}
