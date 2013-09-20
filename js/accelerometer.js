
var content = {

    initialize: function () {
        this.watchId = null;
        this.bindEvents();
    },

    bindEvents: function () {
        var button = document.getElementById('stop-watching');

        // Wait for device API libraries to load
        document.addEventListener('deviceready', this.onDeviceReady, false);
        button.addEventListener('click', this.stopWatch, false);
    },

    // Start watching the acceleration
    onDeviceReady: function() {
        // Update acceleration every 3 seconds
        var options = { frequency: 3000 };

        this.watchID = navigator.accelerometer.watchAcceleration(this.onSuccess, this.onError, options);
    },

    // Stop watching the acceleration
    stopWatch: function() {
        if (this.watchID) {
            navigator.accelerometer.clearWatch(this.watchID);
            watchID = null;
        }
    },

    // onSuccess: Get a snapshot of the current acceleration
    onSuccess: function (acceleration) {
        var _x = document.getElementById('accelerometer-x'),
            _y = document.getElementById('accelerometer-y'),
            _z = document.getElementById('accelerometer-z'),
            _timestamp = document.getElementById('timestamp');

        _x.value = acceleration.x;
        _y.value = acceleration.y;
        _z.value = acceleration.z;
        _timestamp.value = acceleration.timestamp;
    },

    // onError: Failed to get the acceleration
    onError: function () {
        alert('onError!');
    }
};
