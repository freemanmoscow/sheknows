# Project Name

Tracking snippet that can be installed on tany website and send data using web service

# Project Description

This is a coding was designed for one of my friends to track basic data on both browser and server side.

# Project Overview

In order to collect inventory data from our network of sites, we would like to send each site a snippet to include in locations on their pages that are available for resell. The site owners need only include this snippet anywhere on the site that they would like to be included in the inventory.

# Technical Requirements

Provide a tag (snippet of HTML/JS) that our site owners may include on any page on their respective sites X number of times.
Due to performance concerns, do not use any JavaScript-based libraries within the browser.
Every time the tag is invoked on the page, capture the following data:
- Timestamp
- Page title
- Hostname of the page it is on
- Whether the tag was invoked inside a frame
- The IP address of the client
- The order that the tag was invoked on the page

Send this data back to a server and record in a SQL database (mysql or sqlite).

# Bonus

When you detect that you are within a frame, also save the hostname of the parent document via a comma-separated list.

## Installation

To install it anywhere - just copy and paste the entire folder structure in www root folder.
Make sure you change file paths for js, css, html and php where needed to correspond to your folder structire.
Also, php web service is for backend demo purposes only. Make sure you address security issues. Web service doesn't contain any filtering and protection from SQL injection!

## Usage

For performance reasons it is recommended to use minified versons of js.
To use tracking on your page include the following code before you start using tracking snippet:

```html
<script>
  (function(e,n,s,t,o,u,a){e[o]=e[o]||function(){(e[o].queue=e[o].queue||[]).push(arguments)},u=n.createElement(s),a=n.getElementsByTagName(s)[0],u.async=1,u.src=t,a.parentNode.insertBefore(u,a)})(window,document,"script","../js/sheknows.min.js","sheknows")
</script>
```

In the future use tracking snippet anywhere on the page:

```html
<script>
  sheknows('setSendData',inventoryData);
</script>
```

inventoryData should be an integer representing inventory number of this tracking snippet on the page. If this parameter is omitted, autoincremental numbers will be used starting from 1.


## Credits

Created on Jan 26, 2016 by Pavel Usmanov.
