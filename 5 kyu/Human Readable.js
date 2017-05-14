function humanReadable(seconds) {
  var sec = seconds%60;
  var min = Math.floor((seconds/60)%60);
  var hours = Math.floor((seconds/60)/60);
  var time = hours + ':' + min + ':' + sec;
  var time = time.replace(/\D(?!\d{2})/g, (x) => {return x + '0';});
  if (time.length <8) {return 0 + '' + time;} else {return time;}
  return time;
}

var x = humanReadable(68943);
console.log (x);

