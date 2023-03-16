---
layout: post
title:  "TzI Beta firmware 2.2.0 - Thermal vario"
date:   2023-03-16 09:00:00 +0100
categories: jekyll update
image: ./images/beta_v.png
---

## TzI Beta Thermal Vario Averagefirmware available with also SPIFFS update fix

+ Thermalling detect triggered when turning > 360° continuosly and with positive vario values:

    Dedicated averaging milliseconds option in web interface for thermalling. If enabled it allows to define a different averaging time for vario sound and e-ink while thermalling.
    Thermal activity is detected when turning continuously after 5 seconds with positive vario values.

+ Fix webupdate of SPIFFS:

    SPIFFS update for old devices might not work properly and block on blank page while installing from web interface.
    With This fix it is possible to update SPIFFS both for old and new devices with latest firmware versions.
    Note in order to work install first new Firmware then new SPIFFS as reported below. 

### Only for TzI: the altimetric GPS IGC logger with acoustic vario

![image-title-here]({{site.baseurl}}/images/foto/TzI3d.PNG){:class="img-round img-thmb"}

<h2>IMPORTANT INSTALL IN ORDER</h2>

<ul>
<li>Download and install<a href="{{site.baseurl}}/firmware/firmware_v220_TzI.bin" download><button class="btn btn-download">Main firmware v.2.2.0</button></a>
</li>
<li>Download and install SPIFF after: <a href="{{site.baseurl}}/firmware/spiffs_v220.bin" download><button class="btn btn-download">spiffs_v220.bin</button></a>
</li>

</ul>