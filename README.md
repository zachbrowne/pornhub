pornhub
=======

Access [pornhub](http://www.pornhub.com/) (WARNING: NSFW) programmatically with
Node.JS. Uses [hubtraffic.com](http://http://www.hubtraffic.com/) (go signup!)

Overview
--------

This module scrapes the HTML of pornhub.com and gives you information you can
use in your node programs!

Super Quickstart
----------------

```javascript
var ph = require("pornhub");

ph.details("http://www.pornhub.com/view_video.php?viewkey=591533139", function(err, details) {
  console.log(err, details);
});
```

Installation
------------

Available via [npm](http://npmjs.org/):

> $ npm install pornhub

Or via git:

> $ git clone git://github.com/electblake/pornhub.git node_modules/pornhub

Usage
-----

The `pornhub` package exports a single documented function right now, `details`.

pornhub API
-----------

**details**

Gets details about a specific video.

```javascript
ph.details(uri, cb);
```

```javascript
// get details about a video
ph.details("http://www.pornhub.com/view_video.php?viewkey=591533139", function(err, details) {
  console.log(err, details);
});
```

Arguments

* _uri_ - a full url to an pornhub video page
* _cb_ - a callback to be called in the normal node way with an error (or null)
  and the video details

**search**

Performs a search and returns the results. `parameters` is an object that is
used to construct the query string for the search URL.

Available parameters are:

- `category` (Optional)

- `page` (Optional) Integer

- `search` (Optional) Text

- `stars` (Optional) Array

- `tags` (Optional) Array

- `thumbsize` (Required). Possible values are small,medium,large,small_hd,medium_hd,large_hd

signup for [hubtraffic.com](http://http://www.hubtraffic.com/) and see method `searchVideos` for details

```javascript
ph.search(parameters, cb);
```

```javascript
// get details about a video
ph.search({search: "hard", tags: ["teen"], thumbsize: "medium"}, function(err, results) {
  console.log(err, results);
});
```

Arguments

* _parameters_ - an object containing parameters for the query string (see above
  for details about its properties)
* _cb_ - a callback to be called in the normal node way with an error (or null)
  and the search results

Example
-------

Also see [example.js](https://github.com/deoxxa/pornhub/blob/master/example.js).

```javascript
#!/usr/bin/env node

var xv = require("pornhub");

// get details about a video
xv.details("http://www.pornhub.com/video3823160/stranded_busty_sweetie_decides_to_have_sex_with_a_stranger_in_public_for_money", function(err, details) {
  console.log(err, details);
});
```

Output (example):

```
null { title: 'Stranded busty sweetie decides to have sex with a stranger in public for money',
  duration: '5 min',
  tags:
   [ 'amateur',
     'bigtits',
     'brunette',
     'busty',
     'european',
     'flashing',
     'hardcore',
     'money',
     'outdoor',
     'POV',
     'public' ],
  flv: 'http://porn.im.cbce7ca3.3823160.x.pornhub.com/videos/flv/f/e/6/pornhub.com_fe6e41a62c4162b6b9ff750620acf599.flv?e=1366800046&ri=1024&rs=85&h=2cf1096659393b4c153b7cdfe93a8889',
  thumb: 'http://img-l3.pornhub.com/videos/thumbslll/fe/6e/41/fe6e41a62c4162b6b9ff750620acf599/fe6e41a62c4162b6b9ff750620acf599.23.jpg',
  html: '<iframe src="http://flashservice.pornhub.com/embedframe/3823160" frameborder=0 width=510 height=400 scrolling=no></iframe>' }
```

License
-------

3-clause BSD. A copy is included with the source.

Contact
-------

* GitHub ([deoxxa](http://github.com/deoxxa))
* Twitter ([@deoxxa](http://twitter.com/deoxxa))
* ADN ([@deoxxa](https://alpha.app.net/deoxxa))
* Email ([deoxxa@fknsrs.biz](mailto:deoxxa@fknsrs.biz))
