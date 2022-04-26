import React from "react";
import "./messenge.css";

export default function Messenge({ own }) {
  return (
    <>
      <div className={own ? "message own" : "message"}>
        <div className="messageTop">
          <img
            src="https://t1.daumcdn.net/cfile/tistory/99292C415E6864240A"
            alt=""
            className="messageImg"
          />
          <p className="messageText">
            안녕하세요! 아가씨안녕하세요! 아가씨안녕하세요! 아가씨 안녕하세요!
            아가씨 안녕하세요! 아가씨 안녕하세요! 아가씨 안녕하세요! 아가씨
            안녕하세요! 아가씨
          </p>
        </div>
        <div className="messageBottom">1 시간 전</div>
      </div>
    </>
  );
}
