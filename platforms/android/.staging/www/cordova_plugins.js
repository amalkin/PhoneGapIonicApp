cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.devgirl.calendar/www/calendar.js",
        "id": "org.devgirl.calendar.Calendar",
        "clobbers": [
            "window.calendar"
        ]
    },
    {
        "file": "plugins/com.attendease.ibeacons/www/AttendeaseBeacons.js",
        "id": "com.attendease.ibeacons.AttendeaseBeacons",
        "clobbers": [
            "AttendeaseBeacons"
        ]
    },
    {
        "file": "plugins/pl.makingwaves.estimotebeacons/www/EstimoteBeacons.js",
        "id": "pl.makingwaves.estimotebeacons.EstimoteBeacons",
        "clobbers": [
            "EstimoteBeacons"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.devgirl.calendar": "0.1.0",
    "com.attendease.ibeacons": "0.4.2",
    "pl.makingwaves.estimotebeacons": "0.1.0"
}
// BOTTOM OF METADATA
});