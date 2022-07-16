const now = new Date();
const day_list = ['日', '一', '二', '三', '四', '五', '六'];

// main time
$(function getTime() {
  let week = now.getDay();
  let weekZH = '週' + day_list[week];

  let month = now.getMonth() + 1;
  let date = now.getDate();
  let today = month + '/' + date;

  print = `
	<h3>${weekZH}</h3>
	<h3>${today}</h3>
	`;
  $('.date_container').html(print);
});

$.getJSON(
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-C67AAE13-37AA-4F9D-892F-E25483690887&locationName=%E4%BF%A1%E7%BE%A9%E5%8D%80&elementName=&startTime=',
).done(function (re) {
  T = re.records.locations[0].location[0].weatherElement[1];
  TNow = T.time[0].elementValue[0].value;

  Wx = re.records.locations[0].location[0].weatherElement[6];
  WxNow = Wx.time[0].elementValue[1].value;

  weatherSwitch(WxNow);

  print = `
		<h2>${TNow}°</h2>
		<img src=${weatherIcon} alt="" />
		`;
  $('.weather_container').html(print);

  temperatureRange();

  // week
  const date1 = new Date(now);
  deleteFirstDay(); // 去掉第一天的資料

  for (i = 0; i < 5; i++) {
    date1.setDate(date1.getDate() + 1);
    let week1 = date1.getDay();
    let futureWeek = '週' + day_list[week1];

    let month = date1.getMonth() + 1;
    let date = date1.getDate();
    let futureDate = month + '/' + date;

    futureWx = Wx.time[y + i * 2].elementValue[1].value;
    futureTempH = T.time[y + i * 2].elementValue[0].value;
    futureTempL = T.time[y + 1 + i * 2].elementValue[0].value;

    weatherSwitch(futureWx);

    print = `
				<div class="future_container">
          <p>${futureWeek}</p>
          <p>${futureDate}</p>
          <img src="${weatherIcon}" alt="" />
				</div>
				`;
    $('.daily_container').append(print);

    LowPosition = 80 - (futureTempL - MinTemp) * distance;
    HighPosition = 0 + (MaxTemp - futureTempH) * distance;
    print = `
    <div class="temperature">
      <div class="temperatureH" style="top: ${HighPosition}px">
        <p id="futureTempHText">${futureTempH}°</p>
        <div class="dot"></div>
      </div>
      <div class="temperatureL" style="top: ${LowPosition}px">
        <div class="dot"></div>
        <p>${futureTempL}°</p>
      </div>
    </div>
    `;
    $('.temperature_container').append(print);
  }
});

// 判斷天氣
function weatherSwitch(thisWx) {
  if (thisWx <= 3 || (24 <= thisWx && thisWx <= 25)) {
    weatherIcon = './assets/images/sun.svg';
  } else if ((4 <= thisWx && thisWx <= 7) || (26 <= thisWx && thisWx <= 28)) {
    weatherIcon = './assets/images/cloud.svg';
  } else {
    weatherIcon = './assets/images/rain.svg';
  }
}

// 去掉第一天的資料
function deleteFirstDay() {
  y = 0;
  for (x = 0; x < 5; x++) {
    WxNowStartTime = Wx.time[y].startTime;
    let todayDate =
      now.getFullYear() +
      '-' +
      ('0' + (now.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + now.getDate()).slice(-2);
    if (JSON.stringify(WxNowStartTime).includes(todayDate) == true) {
      y++;
    }
  }
}

// 取得一整週的所有氣溫數值，判斷極端值，決定級距
function temperatureRange() {
  deleteFirstDay();
  const MaxTempArray = [];
  const MinTempArray = [];
  for (i = 0; i < 5; i++) {
    futureTempH = T.time[y + i * 2].elementValue[0].value;
    MaxTempArray.push(futureTempH);
    futureTempL = T.time[y + 1 + i * 2].elementValue[0].value;
    MinTempArray.push(futureTempL);
  }

  MaxTemp = Math.max(...MaxTempArray);
  MinTemp = Math.min(...MinTempArray); // 數線基準點
  distance = 70 / (MaxTemp - MinTemp); // 數線級距

  SVGline(MaxTempArray, MinTempArray, MaxTemp, MinTemp, distance);
}

// 動態畫數線
function SVGline(MaxTempArray, MinTempArray, MaxTemp, MinTemp, distance) {
  HighP1 = 18 + (MaxTemp - MaxTempArray[0]) * distance;
  HighP2 = 18 + (MaxTemp - MaxTempArray[1]) * distance;
  HighP3 = 18 + (MaxTemp - MaxTempArray[2]) * distance;
  HighP4 = 18 + (MaxTemp - MaxTempArray[3]) * distance;
  HighP5 = 18 + (MaxTemp - MaxTempArray[4]) * distance;

  LowP1 = 82 - (MinTempArray[0] - MinTemp) * distance;
  LowP2 = 82 - (MinTempArray[1] - MinTemp) * distance;
  LowP3 = 82 - (MinTempArray[2] - MinTemp) * distance;
  LowP4 = 82 - (MinTempArray[3] - MinTemp) * distance;
  LowP5 = 82 - (MinTempArray[4] - MinTemp) * distance;
  print = `
  <svg id="SVGlineH" width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="none">
  <path
  d="M0 ${HighP1} C25 ${HighP1},
  25 ${HighP2} ,50 ${HighP2} C75 ${HighP2},
  75 ${HighP3} ,100 ${HighP3} C125 ${HighP3},
  125 ${HighP4} ,150 ${HighP4} C175 ${HighP4},
  175 ${HighP5} ,200,${HighP5}"
  ></path>
</svg>

  <svg id="SVGlineL" width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="none">
    <path
    d="M0 ${LowP1} C25 ${LowP1},
    25 ${LowP2} ,50 ${LowP2} C75 ${LowP2},
    75 ${LowP3} ,100 ${LowP3} C125 ${LowP3},
    125 ${LowP4} ,150 ${LowP4} C175 ${LowP4},
    175 ${LowP5} ,200,${LowP5}"
    ></path>
  </svg>`;
  $('.temperature_line').append(print);
}
