
const mond = document.getElementById("mond");
const tues = document.getElementById("tues");
const wedn = document.getElementById("wedn");
const thur = document.getElementById("thur");
const frid = document.getElementById("frid");
const satu = document.getElementById("satu");
const sund = document.getElementById("sund");
const registerTime2 = document.getElementById("registerTime");
let times = JSON.parse(localStorage.getItem("times")) || {};

mond.value = times.mond;
tues.value = times.tues;
wedn.value = times.wedn;
thur.value = times.thur;
frid.value = times.frid;
satu.value = times.satu;
sund.value = times.sund;



registerTime2.addEventListener("click",function(){    
    
    times = {};
    TimeSave();
});


function TimeSave(){

    times.mond = mond.value;
    times.tues = tues.value;
    times.wedn = wedn.value;
    times.thur = thur.value;
    times.frid = frid.value;
    times.satu = satu.value;
    times.sund = sund.value;
    localStorage.setItem("times",JSON.stringify(times));
    displaySavedData();
}

function displaySavedData(){
    const trainTimeElement = document.getElementById("tomorrow-train-time");
    const times = JSON.parse(localStorage.getItem("times"));
    
    // 明日の日付を取得します
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    // 曜日に対応する時刻を取得します
    const dayOfWeek = tomorrow.getDay();
    const dayOfWeekString = ['sund', 'mond', 'tues', 'wedn', 'thur', 'frid', 'satu'][dayOfWeek];
    if (times && times[dayOfWeekString]){
        const trainTime = times[dayOfWeekString];
        trainTimeElement.textContent = `${trainTime}`;
        document.getElementById('tomorrow-train-time').style.fontSize = '60px';
    }else{
        const trainTime = '時刻が設定されていません';
        
        trainTimeElement.textContent = `${trainTime}`;
        document.getElementById('tomorrow-train-time').style.fontSize = '16px';
    }
    
}

window.addEventListener("DOMContentLoaded", displaySavedData);
    

