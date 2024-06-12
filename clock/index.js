setInterval(() => {
  d = new Date();
  //console.log(d.getHours())
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = 30 * hr + min / 2;
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;
  hour.style.transform=`rotate(${hr_rotation}deg)`
  minute.style.transform=`rotate(${min_rotation}deg)`
  second.style.transform=`rotate(${sec_rotation}deg)`
}, 1000);

//console.log(30*12+5/2)
//console.log(6*5)
