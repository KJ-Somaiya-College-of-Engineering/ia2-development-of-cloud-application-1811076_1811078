const dayOfTheWeek = (date = new Date()) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Tsday', 'Friday', 'Saturday'];
    console.log(days[date.getDay()]);
    return days[date.getDay()];
  }
  
  
  exports.dayOfTheWeek = dayOfTheWeek;