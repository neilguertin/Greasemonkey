// ==UserScript==
// @name     Remove Strava Clutter
// @description Removes sponsored content, virtual rides, and more from your Strava feed
// @include https://www.strava.com/dashboard
// @include https://www.strava.com/dashboard/*
// @include https://www.strava.com/activities/*
// @author Neil Guertin
// @version  1
// @grant    none
// ==/UserScript==

// https://davidwalsh.name/add-rules-stylesheets
var sheet = (function() {
	// Create the <style> tag
	var style = document.createElement("style");

	// Add a media (and/or media query) here if you'd like!
	// style.setAttribute("media", "screen")
	// style.setAttribute("media", "only screen and (max-width : 1024px)")

	// WebKit hack :(
	style.appendChild(document.createTextNode(""));

	// Add the <style> element to the page
	document.head.appendChild(style);

	return style.sheet;
})();

// Remove class and id based divs
sheet.insertRule(".promo-fancy { display: none }");
sheet.insertRule(".upsell { display: none }");
sheet.insertRule("#suggested-follows { display: none }");
sheet.insertRule("#your-challenges { display: none }");
sheet.insertRule("#js-manage-your-goals { display: none }");
sheet.insertRule("#run-yearly-progress-container, #ride-yearly-progress-container, #swim-yearly-progress-container { display: none }");
sheet.insertRule(".challenge { display: none }");
sheet.insertRule(".club { display: none }");
sheet.insertRule(".matched-activities-upsell { display: none }");
sheet.insertRule(".relative-effort-upsell { display: none }");

// Remove virtual rides. These cannot be removed with a simple css class based rule.
all_map_tags = document.getElementsByClassName('activity-map-tag')
for(tag of all_map_tags){
  // tag.style.border = "green dashed"
  if (tag.innerText == "Virtual"){
    tag.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none"
  }
}

all_enhanced_tags = document.getElementsByClassName('enhanced-tag')
for(tag of all_enhanced_tags){
  // tag.style.border = "green dashed"
  if (tag.innerText == "TrainerRoad"){
    tag.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none"
  }
}

all_walk_icons = document.getElementsByClassName('icon-walk')
for(icon of all_walk_icons){
  // icon.parentElement.parentElement.parentElement.parentElement.parentElement.style.border = "green dashed"
  icon.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none"
}

console.log("Removed Strava Clutter")
