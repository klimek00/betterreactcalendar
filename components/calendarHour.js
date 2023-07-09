export default function CalendarHour({data, date, fn}) {
  return (
  <>
    { data[date] ? data[date].map((hour, j) => { 
      if (!hour) return ( <div key={'hour-'+j} className=''></div> )

      return ( <div key={'hour-'+hour+'-'+j} className='calendarHours my-2 transition-colors duration-300 hover:bg-blue-600 hover:shadow hover:shadow-slate-400 hover:text-white rounded-lg cursor-pointer' onClick={() => fn({'day': date, 'hour': hour})}>
          {hour}
        </div>
      )
    }) : <div className='calendarEmptyHours'></div> }
  </>
  )
}
  