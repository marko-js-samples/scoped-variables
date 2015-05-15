var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

exports.renderer = function(input, out) {
    var renderBody = input.renderBody;

    var date = new Date();

    var amPm = 'AM';
    var hours = date.getHours();

    if (hours >= 12) {
        hours = hours-12;
        amPm = 'PM';
    }

    if (hours === 0) {
        hours = 12;
    }

    var minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0' + min;
    }

    renderBody(
        out,
        {
            time: hours + ':' + minutes + ' ' + amPm,
            month: months[date.getMonth()],
            dayOfWeek: days[date.getDay()],
            dayOfMonth: date.getDate(),
            year: date.getFullYear()
        });
};