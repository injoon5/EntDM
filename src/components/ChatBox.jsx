import React from 'react';
import './ChatBox.css';
export default ({ text, username, handleTextChange }) => (
  <div>
    <div className="row">
      <div className="col-xs-12">
        <div className="chat">
          <div className="col-xs-5 col-xs-offset-3">
            <input
              id="message"
              type="text"
              value={text}
              placeholder="메시지 보내기"
              className="form-control"
              onChange={handleTextChange}
              onKeyDown={handleTextChange}
            />
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
);
