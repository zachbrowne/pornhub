#!/usr/bin/env node

var ph = require("./");

// search for... porn!
ph.search({search: "hard", tags: ["teen"], thumbsize: "medium"}, function(err, res) {
  if (err) {
    return console.warn(err);
  }

  console.log("Found " + res.videos.length + " results... Getting details...");

  // get details about each video
  res.videos.forEach(function(video) {
    ph.details(video.url, function(err, details) {
      if (err) {
        return console.warn("Error fetching details for " + video.url);
      }

      console.log("");
      console.log(details.title + " (" + video.url + ")");
      console.log("[ " + details.tags.join(", ") + " ]");
    });
  });
});
