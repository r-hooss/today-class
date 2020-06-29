import React from "react";
import "./App.css";

const schedule = {
  Monday: ["기가", "예음", "영어", "학스", "국어", "과학", "수학"],
  Tuesday: ["체육", "예미", "국어", "사회", "기가", "도덕", "영어"],
  Wednesday: ["수학", "국어", "체육", "유도", "사회", "주제"],
  Thursday: ["수학", "창A", "도덕", "미술", "과학", "사회", "영어"],
  Friday: ["국어", "영어", "기가", "과학", "창B", "진업", "자동"],
  Sunday: ["!"],
  Saturday: ["!"],
};

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

function App() {
  return (
    <div className="container">
      <div className="schedule">
        <div className="day">{n.slice(0, 3)}</div>
        {schedule[n].map((props, index) => {
          return (
            <span key={index}>
              {props}
              <br />
            </span>
          );
        })}
      </div>
      <div className="info">
        <div className="reason">내가 쓰고 싶어서 만든</div>
        <div className="WIT">우리 반 시간표 웹 앱</div>
        <div className="WMT">제작자 : 후스</div>
        <div className="repo">
          레포지토리 :{" "}
          <a href="https://github.com/r-hooss/today-class">click here</a>
        </div>
      </div>
    </div>
  );
}

export default App;
