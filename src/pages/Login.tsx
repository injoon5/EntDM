import React from 'react';
import axios from 'axios';

class Login extends React.Component<{}, { username: any; password: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  async login() {
    const { username, password } = this.state;
    axios
      .get(
        `http://localhost:9999/login?username=${username}&password=${password}`
      )
      .then((res) => res.data)
      .then((data) => {
        if (data) {
          window.localStorage.setItem('username', username);
          window.location.reload()
        } else {
          alert('아이디 또는 비밀번호가 일치하지 않습니다.')
        }
      });
  }
  render() {
    if (window.localStorage.getItem('username') != null) {
      return <></>;
    } else {
      return (
        <>
          <div className="dim"></div>
          <div className="container">
            <div className="test">
              <div className="loginWrapperIH">
                <div className="loginBoxTitle">엔트리 계정으로 로그인</div>
                <div className="loginBoxContent">
                  <form>
                    <div className="loginBoxFormWrapper">
                      <span className="loginBoxSpan loginBoxId">아이디</span>
                      <input
                        id="name"
                        className="loginBoxInput loginBoxInputId"
                        onChange={(e) =>
                          this.setState({ username: e.target.value })
                        }
                      />
                      <div className="eeeeee"></div>
                      <span className="loginBoxSpan loginBoxPassword">
                        비밀번호 입력
                      </span>
                      <input
                        id="password"
                        className="loginBoxInput loginBoxInputPassword"
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                      />
                      <div
                        className="entryConfirmButton loginBoxConfirm"
                        onClick={async () => await this.login()}
                      >
                        로그인
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Login;
