# Building a Weather Widget

The data that we get back has a lot of information. The data object consists of two JavaScript objects; the object of interest to us is the one named "current_observation". This object has a lot of interesting data.

The Wunderground documentation lists all of the available data. For "conditions": http://www.wunderground.com/weather/api/d/docs?d=data/conditions

For this widget we need the following data:

* `temp_c`: Temperature in celsius
* `temp_f`: Temperature in fahrenheit 
* `display_location.city`
* `forecast_url`
* `observation_time_rfc822`: date and time
* `weather`: e.g. "Sunny" or "Partly Cloudy"
* `icon_url`: image representing the weather


This information can be combined to create a weather widget.

1. Include jQuery
2. Build HTML skeleton for the widget
3. Add CSS
4. Use AJAX to inject dynamic data into widget
5. Create a button to update data