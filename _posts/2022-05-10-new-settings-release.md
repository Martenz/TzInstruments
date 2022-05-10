---
layout: post
title:  "TzI New Settings Page Release v 1.0.1.1"
date:   2022-05-10 09:00:00 +0100
categories: jekyll update
image: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAkcD4qdkgi5pWEGEiI-BPa43-yBR7bkwLQ&usqp=CAU
---

### Download SPIFFS (v1.0.1.1)

<a href="{{site.baseurl}}/firmware/spiffs_v101_1.bin" download>spiffs_v101_1.bin</a>

<h2>Note!!!<h2>

* Upload this file only if you are running latest v 1.0.1 of TzI firmware 
* Upload this file from Update page in wifi interface, settings wil be reset to default factory.
* This SPIFFS works for V154_v1 epaper, if your epaper stop working after this update try different screen option v154...:

    1. turn on the device
    2. press Page button 2 times to go to settings page
    3. press and hold 3 seconds Page button to enable WiFi
    4. Go to Settings page in Wifi interface 192.168.4.1
    5. change display verison and restart
    
<a href="{{site.baseurl}}/howto#wifi-update-firmware"> 
<br>Read the documentation on how to update firmware here.</a>

### Relese Notes: 

* fix Vario Curve saving, import

    fixing vario curve inputs stored before as integere, now saving vval to float and frq, duty and pause to integer correctly.

* NEW Feature: default curves

    added a new select with two default curves to be imported; also to restore default factory curve. 