import React from "react";
import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversations from "../../components/conversations/Conversations";
import Messenge from "../../components/messenge/Messenge";
import ChatOnline from "../../components/chatOnline/ChatOnline";
export default function Messenger() {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="친구검색" className="chatMenuInput" />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Messenge />
              <Messenge own={true} />
              <Messenge />
              <Messenge own={true} />
              <Messenge />
              <Messenge own={true} />
              <Messenge />
              <Messenge own={true} />
              <Messenge />
              <Messenge own={true} />
              <Messenge />
              <Messenge own={true} />
              <Messenge />
              <Messenge own={true} />
              <Messenge />
              <Messenge own={true} />
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="대화내용을 입력하세요"
              ></textarea>
              <button className="chatSubmitButton">전송</button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline off={true} />
            <ChatOnline off={true} />
            <ChatOnline off={true} />
          </div>
        </div>
      </div>
    </>
  );
}
