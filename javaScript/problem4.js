//Write a function. It will return the name of a month of the year, given the month number,
// according to the table below. Make sure you do not put any input or output statements in
//the function; the month number will be passed in and the string containing the
//name will be returned.
function month_name(num) {
let month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
return month[num -1];
}
