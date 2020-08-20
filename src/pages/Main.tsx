import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Login from './Login';

class Main extends React.Component<{}, { show: boolean, showLogout: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: false,
      showLogout: false,
    };
  }
  componentDidMount() {
    if (window.localStorage.getItem('username') != null) {
      this.setState({ showLogout: true });
    }
  }
  show() {
    this.setState({ show: true });
    console.log(this.state.show)
  }
  hide() {
    this.setState({ show: false });
    console.log(this.state.show)
  }
  render() {
    return (
      <>
        <div className="container">
          <Nav show={this.state.showLogout} />
          <Login />
          <Link to="/chat">
            <button className="start">시작하기</button>
          </Link>
        </div>
      </>
    );
  }
}

export default Main;
