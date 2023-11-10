function month_name(date) {
    var arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return arr[date.getMonth()];
}
console.log(month_name(new Date("12")));
console.log(month_name(new Date("2")));
