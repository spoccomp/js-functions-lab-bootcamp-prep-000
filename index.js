function happyHolidays(){
  return "Happy holidays!"
}
function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}
function happyHolidayTo(holiday, name){
  return `Happy ${holiday}, ${name}!`
}
function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`
}
happyHolidays()
happyHolidaysTo('Richard')
happyHolidayTo('Christmas', 'Richard')
holidayCountdown('96', 'Christmas')