//your JS code here. If required.
var browserName = navigator.appName;
    var version = navigator.appVersion;

    var message = "You are using " + browserName + " version " + version;

    var browserInfoDiv = document.getElementById("browser-info");
    browserInfoDiv.innerHTML = message;