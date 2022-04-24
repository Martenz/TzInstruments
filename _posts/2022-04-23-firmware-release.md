---
layout: post
title:  "TzI Firmware Release v 1.0.1"
date:   2022-04-23 09:00:00 +0100
categories: jekyll update
image: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAkcD4qdkgi5pWEGEiI-BPa43-yBR7bkwLQ&usqp=CAU
---

### Download firmware (v1.0.1)

<a href="{{site.baseurl}}/firmware/firmware_v101_esp32dev.bin" download>FIRMWARE.bin</a>


Download each file and upload it from the Wifi web interface. 
<a href="{{site.baseurl}}/howto#wifi-update-firmware"> 
<br>Read the documentation on how to update firmware here.</a>

### Relese Notes: 

* fix GPS NMEA sentences sent through BLE

    fixing GPS connection on and off continuously with XCtrack, NMEA sentences are now sent contiuosly even if GPS satellites count goes down minimum threshold for a couple of seconds. Sending last NMEA sentence from GPS continuosly to avoid XCtrack stop reading them from BLE.