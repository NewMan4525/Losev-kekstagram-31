function isMeetLong(startWorkD, finishWorkD, startMeet, meetLength) {

  const timeToMinutes = (data) => {

    const hours = [];
    const minutes = [];

    const simbols = data.split('');
    const splitter = data.indexOf(':');

    simbols.forEach((el, i) => {

      if (i < splitter) {
        hours.push(el);
      }
      if (i > splitter) {
        minutes.push(el);
      }

    });

    const hoursToMin = (Number(hours.join(''))) * 60;
    const addittionalMin = Number(minutes.join(''));

    return hoursToMin + addittionalMin;
  };

  [startWorkD,finishWorkD,startMeet].forEach((el) => timeToMinutes(el));

  const workDayInMin = finishWorkD - startWorkD;
  const finishMeetInMin = startMeet + meetLength;

  switch (true) {
    case meetLength > workDayInMin: return false;
    case startWorkD > startMeet: return false;
    case finishMeetInMin > finishWorkD: return false;
    default: return true;
  }

}

isMeetLong('08:00', '17:30', '14:00', 90); // true
isMeetLong('8:0', '10:0', '8:0', 120); // true
isMeetLong('08:00', '14:30', '14:00', 90); // false
isMeetLong('14:00', '17:30', '08:0', 90); // false
isMeetLong('8:00', '17:30', '08:00', 900); // false
