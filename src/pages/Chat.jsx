import React from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import ChatList from '../components/ChatList';
import ChatBox from '../components/ChatBox';
import Nav from '../components/Nav';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      username: '',
      chats: [],
    };
  }
  componentDidMount() {
    document.querySelector('#chatList').style.height = `calc(calc(100vh - ${(document.querySelector('.nav').clientHeight + document.querySelector('#message').clientHeight) * 2 }px) - .5rem)`
    const username = window.localStorage.getItem('username');
    this.setState({ username });
    const pusher = new Pusher('6020992ef0fa881450d0', {
      cluster: 'ap3',
    });
    const channel = pusher.subscribe('chat');
    channel.bind('message', (data) => {
      this.setState({ chats: [...this.state.chats, data], test: '' });
    });
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    if (e.keyCode === 13) {
      const payload = {
        username: this.state.username,
        message: this.state.text,
      };
      axios
        .post('http://localhost:9999/message', payload)
        .then(() => this.setState({ text: '' }));
    } else {
      this.setState({ text: e.target.value });
    }
  }
  render() {
    return (
      <>
        <div className="container">
          <Nav />
          <section>
            <ChatList chats={this.state.chats} />
            <ChatBox
              text={this.state.text}
              username={this.state.username}
              handleTextChange={this.handleTextChange}
            />
          </section>
        </div>
      </>
    );
  }
}

export default Chat;
