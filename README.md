#React Calendar

Simply calendar which displays date and allows user to press on particular date. Uses React and sadly TailwindCSS.
![sample](https://github.com/klimek00/betterreactcalendar/assets/36035343/bbccd53e-e227-4851-92c6-661e51ce2d79)


It's parameters:
data: Object of Arrays - days and hours to print. currently it's only available format is: JSON: {
    "4.07.2023": [
      "9:00",
      "9:20",
      ...
    ],
    ...
}
days: Int(default 7): number of next days to display, this is: "2.07, monday", "3.07, tuesday", ...  
title: String(default 'Data Wizyty')- header of calendar
style: styling for calendar, currently only parent div  
options: to be added
userDateSelect: function returning Object{day: String (e.g "30.07.2021"), hour: String (e.g 9:00")} when user presses particular date. 

Todo:
* add styling for each element (header, body, topic, single element)
* allow more types of data
* add language
* add occupied data which blocks hours
* empty days styling
* functions into functions file
* everything is functions - should be classes
* virtualDate is lazy string - at least fix useState bug
* 
