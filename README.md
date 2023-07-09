#React Calendar

Simply calendar which displays date and allows user to press on particular date. Uses React and sadly TailwindCSS.
![sample](https://github.com/klimek00/betterreactcalendar/assets/36035343/bbccd53e-e227-4851-92c6-661e51ce2d79)


<h4>It's parameters:</h4>
<ul>
<li>data: Object of Arrays - days and hours to print. currently it's only available format is: JSON: 
<pre>{
  "4.07.2023": [
    "9:00",
    "9:20",
    ...
  ],
  ...
}</pre>
<br>

<li>days: Int(default 7): number of next days to display
<li>title: String(default 'Data Wizyty')- header of calendar</li>
<li>style: styling for calendar, currently only parent div  </li>
<li>options: to be added</li>
<li>userDateSelect: function returning 
  <pre>Object{day: "30.07.2021", hour: "9:00"}</pre>
  depending on date user presses. </li>
</ul>


<h4>Todo:</h4>
<ul>
<li>add styling for each element (header, body, topic, single element)</li>
<li>allow more types of data</li>
<li>add language</li>
<li>add occupied data which blocks hours</li>
<li>empty days styling</li>
<li>functions into functions file</li>
<li>everything is functions - should be classes</li>
<li>virtualDate is lazy string - at least fix useState bug</li>
<li></li>
</ul>
