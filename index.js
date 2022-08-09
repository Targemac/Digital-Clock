let clock = () => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  let day = date.getDay();
  let today = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
    hrs = hrs - 12;
    period = "PM";
  }

  hrs = hrs < 10 ? `0${hrs}` : hrs;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;

  let hrs_box = `${hrs}`;
  let mins_box = `${mins}`;
  // let secs_box = `${secs}`;
  let period_box = `${period}`;

  document.getElementById("hrs_box").innerText = hrs_box;
  document.getElementById("mins_box").innerText = mins_box;
  // document.getElementById("secs_box").innerText = secs_box;
  document.getElementById("period_box").innerText = period_box;

  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;

    default:
      break;
  }

  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;

    default:
      break;
  }

  let suffix;

  switch (today) {
    case 1:
      suffix = "st";
      break;
    case 2:
      suffix = "nd";
      break;
    case 3:
      suffix = "rd";
      break;
    case 4:
      suffix = "th";
      break;
    case 5:
      suffix = "th";
      break;
    case 6:
      suffix = "th";
      break;
    case 7:
      suffix = "th";
      break;
    case 8:
      suffix = "th";
      break;
    case 9:
      suffix = "th";
      break;

    default:
      break;
  }

  document.getElementById("day_box").innerText = day;
  document.getElementById("today_box").innerText = `${today}${suffix}`;
  document.getElementById("month_box").innerText = month;
  document.getElementById("year_box").innerText = year;
};
clock();
setInterval(() => {
  clock();
}, 1000);

function blinker() {
  const colon = document.getElementsByClassName("colon_box");

  for (const cb of colon) {
    setInterval(() => {
      cb.style.visibility = "hidden";
    }, 1000);

    setInterval(() => {
      cb.style.visibility = "visible";
    }, 2000);
  }
}

blinker();

function writeDeveloper() {
  let developer_name = document.getElementById("developer_name");
  let developer = "Developer: Targema Charles";
  developer_name.innerText = developer;
}
writeDeveloper();
