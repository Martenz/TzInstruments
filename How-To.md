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
* <a href="#sd-card">SD Card</a>
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

<hr>

## SD Card

SD card should be formatted as FAT32 before using it with TzI instruments.
Insert SD card before switch on the device with pin connectors facing up as shown in the picture on the homepage.

## Wifi Configurator

All settings for TzI GPS vario are available on the web interface hosted on the device that is acessible enabling WiFi of the device.

Here below the procedure to enable and access the interface, while next paragraphs describes all web interface pages.

#### WiFi ON and web interface

1. To configure TzI GPS Vario go to the third page, there you will see the WiFi status (should be OFF).
2. Long press on the page button ( O ) to enable WiFi hotspot
3. an IP ( 192.168.4.1 ) will appear and WiFi status now should be ON
    ![image-title-here]({{site.baseurl}}/images/foto/howto/img_10.png){:class="img-round img-thmb"}
4. Connect to the Wifi hotspot on your phone/tablet/PC, search for TzI
    ![image-title-here]({{site.baseurl}}/images/foto/howto/img_11.png){:class=""}
5. In your browser visit 192.168.4.1 and the main page of TzI settings will be visible.

![image-title-here]({{site.baseurl}}/images/foto/howto/wifi/wifi01.png){:class=""}


#### Wifi: Data

This page reports just some data from the device in real-time:

* Device Id	
* Running time	
* GPS Time UTC+00	
* Battery PIN VBAT	
* Battery %	
* Speaker Volume (0-255)	
* Storage	
* GPS Fix	
* GPS Satellites	
* GPS Altitude m	
* Barometric Altitude m	
* Temperature °C	
* Pressure hPa	

#### Wifi: Settings

In this page is possible to change several option of the device.

Note that default values are already set and optimized for better performances. If you change these you might experience some different behaviour of the device.

![image-title-here]({{site.baseurl}}/images/foto/howto/wifi/wifi02.png){:class=""}

1. **Pilot name**: name that will be reported in the IGC track log if an SD is present.

2. **UTC offset**: time zone eg. ITA +1, to display correct time on eink display once got a GPS fix

3. **Speaker Volume**: change default speaker volume when device is powered on

4. **Vario Curve**: link to vario curve editor page, see next paragraph

5. **Display Orientation**: set display orientation, display can rotate 90 degrees all around

6. **Display refresh timer**: how oftern force eink refresh to clean ghost effect

7. **Auto display Data page when flying**: when checked the eink will display automatically page 2 (data) when the device detect fly status

8. **Beep only when flying**: if checked the buzzer will beep only when flying with speaker volume defined

9. **LK8EX Bluetooth BLE output**: if checked this will enable LK8EX format for BLE vario output sentence (needed for XCTrack for instance)

10. **Flying Min Speed**: Minimum speed required to detect flying status

11. **Flying Min Time**: Minimum time to detect slying status, this means that if a velocity greater that "Flying Min Speed" is detected for more than this amount of time than the device will be in flying status and start logging.

12. **Flying Stop Time**: Minimum time to detect stand status, i.e. if the velocity is less than "Flying Min Speed" for more than this time the device will stop logging and be set to stand status.

13. **Test Speaker**: just click to test if buzzer works, of course volume should be greater than 0%

14. **Min Satellites number for valid NMEA**: minimum number of satellites available to use, the more satellites the more accuracy in tracking. Optimal value seems to be 5.
Track logs and gps altitude will be enabled only when you get this minimum number of satellites.

15. **Reinitialize GPS module**: reset of GPS module, click this if you can not get a gps fix even outside. Please notice that first gps fix can take 15/20 minutes.

16. **Change Gps Hz**: GPS module Hz sampling

17. **WiFi Off after**: default wifi timer once enabled. When expired the device will restart as normal with bluetooth enabled and wifi disabled.

18. **Change WiFi Password**: set here wifi interface password, default 12345678. 
If you change this and you forget the psw 
you will need to reset to factory the TzI 
to access again to wifi interface! Keep it in mind :)

19. **Restart TzI**: click this button to force the restart of the device. You might use this if you update the device and the automatic restart will not be performed.

#### Wifi: Vario Curve
...

#### Wifi: Track Logs

In this page, if an SD Card is mounted, you can browse track logs of recorded flights and download them.
The file format is **.igc** (not verified yet), meaning that you can download and visualize the track with free 
igc files viewers like [e-logbook.org](https://e-logbook.org) that does not ask for data validation.

I'm in the process of validating the IGC files with **GPS Dump** application, please be patient and finger crossed.
Will update as soon as possible this documentation when the validation will be ready.

So in future it will be possible to download the IGC file with GPS Dump and export it to other application that requires the validation, such as XContest.

For SD Card management:
See also <a href="#sd-card">SD Card</a> paragraph.

#### Wifi Update Firmware

In this page you can update the firmware of the device to latest available that you find in this blog (see posts in main page).

![image-title-here]({{site.baseurl}}/images/foto/howto/wifi/wifi03.png){:class=""}

Once downloaded both SPIFFS and FIRMWARE binaries files, upload them separately form the interface. To perform a complete update you will need to upload both.
SPIFFS file will not force a restart of the device while FIRMWARE after uploaded will restart autmatically the device to apply changes. If not restart manually the device but only once the upload ended (you will see a blank page with a message confirming that upload is finished).