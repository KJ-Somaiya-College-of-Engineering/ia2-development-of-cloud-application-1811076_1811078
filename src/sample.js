const dayOfTheWeek = (date = new Date()) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    console.log(days[date.getDay()]);
    return days[date.getDay()];
  }
  
  
  exports.dayOfTheWeek = dayOfTheWeek;