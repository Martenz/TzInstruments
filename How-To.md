---
layout: page
title: How To
permalink: /howto/
---

# Tz GPS Vario Manual Quick How To

* <a href="#power-on">Power On</a>
* <a href="#power-off">Power Off</a>
* <a href="#battery-management">Battery Management</a>
* <a href="#pages">Pages</a>
* <a href="#speaker-volume">Speaker Volume</a>
* <a href="#wifi-configurator">Wifi Configurator</a>
    * <a href="#wifi-data">Data</a>
    * <a href="#wifi-settings">Settings</a>
        * <a href="#wifi-vario curve">Vario Curve</a>
    * <a href="#wifi-track-logs">Track logs</a>
    * <a href="#wifi-update-firmware">Update firmware</a>

<hr>

## Power On

Switch on the left side: Up TzI on. 

![image-title-here]({{site.baseurl}}/images/foto/howto/img_01.png){:class="img-round img-thmb"}
![image-title-here]({{site.baseurl}}/images/foto/howto/img_02.png){:class="img-round img-thmb"}

<hr>

## Power Off

Switch on the left side: Down TzI off. 
This switch will shut down completely the device, battery is not connected when off and eink display will freeze the current page.

A proper way to shut down would be 

1. go to the first page
2. hold the page button (3rd button from the left O ) for more than 3 seconds to go into sleep mode
3. use the switch to shut down completely and preserve battery

![image-title-here]({{site.baseurl}}/images/foto/howto/img_03.png){:class="img-round img-thmb"}


<b>Note:</b>
Sleep Mode can be used to keep the device listening to satellites, when needed press the reset button to start again the instrument or do a switch up and down to restart with gps in hot reset.

<hr>

## Battery Management

I tested the instrument with Lipo 1s batteries 3.7v:

* 1000mA last 4/5 hours
* 2000mA last 9/10 hours

Charge should be done with 5v charger and low mA input with micro-USB plug. 
Any USB old charger eg. 500mA ( best option ) max 1A will work, <u>avoid to use USB fast chargers that can overheat the board</u>.

![image-title-here]({{site.baseurl}}/images/foto/howto/img_09.png){:class="img-round img-thmb"}

Full charge with 2000mA battery takes around 3 hours, when fully charged the voltage should be 4.20/4.25 and an F will appear on top of the battery indicator in the status bar.
Please check also temperature while charging, if you see on display values above 40 C degrees it might be you charger.

## Pages

Press page button (3rd from the left O ) to move to next page.
In all pages on top you will see a Status Bar on top including:

* battery %
* Bluetooth BLE connectivity
* GPS satellites count
* flying status: S = seat, F = flying, empty=logger disabled
* Vario sound volume On/Off
* current date hh:mm with UTC

#### The Three Pages

1. First page is the main one displaying your ID, if gps is locating or got a fix >> Ready will appear

    Hold in this page the page button >= 3 seconds to: activate sleep mode

2. Page 2 is the Data page:
    * Altimeter (GPS if got a fix, Barometric if not) m.a.s.l.
    * Variometer m/s
    * Ground speed km/h
    * Wind Speed km/h [ work in progress, need some calibration ]
    * Course direction N, E, S, W wheel
    * Wind direction, arrow pointing inside of the course wheel

    ![image-title-here]({{site.baseurl}}/images/foto/howto/img_03.png){:class="img-round img-thmb"}
    ![image-title-here]({{site.baseurl}}/images/foto/howto/img_06.png){:class="img-round img-thmb"}

    Hold in this page the page button >= 3 seconds to: disable flight logger, 
    the icon on status bar will display an empty square with a line on top; 
    if you already landed and want to stop immediately the flight record 
    without wating the default 30 seconds, this is the proper way. 
    Then to enable again flight log just hold again the page button for 3 s in this page.

3. Page 3 is the settings page

    here you can hold and press the page button to enable and disable Wifi.
    Once WiFi is on:

    * connect to TzI WiFi with a PC, Tablet or your phone
    * visit 192.168.4.1 to access the full configuration of TzI

<hr>

## Speaker Volume

Arrow up once: volume +up
<br>Arrow up 3 seconds: volume max

Arrow down once: volume -down
<br>Arrow down 3 seconds: voleme off

![image-title-here]({{site.baseurl}}/images/foto/howto/img_04.png){:class="img-round img-thmb"}


## Wifi Configurator
<hr>
...

#### Wifi Data
...

#### Wifi Settings
...

#### Wifi Vario Curve
...

#### Wifi Track Logs
...

#### Wifi Update Firmware
...
