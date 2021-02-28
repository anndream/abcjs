(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{599:function(e,t,i){"use strict";i.r(t);var n=i(45),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"midi-js-usage"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#midi-js-usage"}},[e._v("#")]),e._v(" MIDI.JS Usage")]),e._v(" "),i("h2",{attrs:{id:"notes-for-version-5-8-0"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#notes-for-version-5-8-0"}},[e._v("#")]),e._v(" Notes for Version 5.8.0")]),e._v(" "),i("p",[e._v("This way of creating midi is being deprecated by a new method that is much smaller, less buggy and integrates with the TimingCallbacks object. This will continue to work for the forseeable future, but probably won't change much.")]),e._v(" "),i("p",[e._v("See "),i("RouterLink",{attrs:{to:"/synth.html"}},[e._v("Synth Documentation")]),e._v(" for details.")],1),e._v(" "),i("h2",{attrs:{id:"notes-for-version-3-0-beta"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#notes-for-version-3-0-beta"}},[e._v("#")]),e._v(" Notes for Version 3.0 Beta")]),e._v(" "),i("p",[e._v("There are a number of features described below that are not yet activated. This release is primarily to get the main MIDI functionality working. Here is a list of features you can look forward to in upcoming versions:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Changing the instrument and channel in the midi file: right now, one channel is used, and the instrument is Grand Piano.")])]),e._v(" "),i("li",[i("p",[e._v("Changing the tempo is not available.")])]),e._v(" "),i("li",[i("p",[e._v("The listener doesn't return much information: look for much more to come.")])]),e._v(" "),i("li",[i("p",[e._v('The "play selection" functionality is not implemented.')])]),e._v(" "),i("li",[i("p",[e._v('The "bouncing ball" functionality is not implemented.')])])]),e._v(" "),i("h2",{attrs:{id:"midi-generation-in-abcjs"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#midi-generation-in-abcjs"}},[e._v("#")]),e._v(" MIDI generation in ABCJS")]),e._v(" "),i("p",[e._v("There are two ways to generate MIDI: as a download link, and as an inline control. The download link method is built into ABCJS. The inline control, though, depends on the external library "),i("a",{attrs:{href:"https://github.com/mudcube/MIDI.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("MIDI.js"),i("OutboundLink")],1)]),e._v(" "),i("p",[e._v("That, in turn, is dependent on a set of sound fonts. A good place to get them is "),i("a",{attrs:{href:"https://github.com/paulrosen/midi-js-soundfonts",target:"_blank",rel:"noopener noreferrer"}},[e._v("MIDI.js Soundfonts"),i("OutboundLink")],1)]),e._v(" "),i("h2",{attrs:{id:"site-setup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#site-setup"}},[e._v("#")]),e._v(" Site Setup")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Use the version of the library that contains midi.js.")])]),e._v(" "),i("li",[i("p",[e._v("The soundfonts, by default, are served from github. If you would like host them yourself, put them on your server in a publicly accessible place and call:")])])]),e._v(" "),i("p",[i("code",[e._v('window.ABCJS.midi.setSoundFont("/url/to/soundfont/");')])]),e._v(" "),i("p",[e._v("The trailing slash is required.")]),e._v(" "),i("p",[e._v("There is also some CSS required to make the MIDI control look right. You can use the example CSS in this repository and modify it to match your site. The example CSS uses Font Awesome. Include these two lines:")]),e._v(" "),i("p",[i("code",[e._v('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">')]),e._v(" "),i("code",[e._v('<link rel="stylesheet" href="abcjs-midi.css" media="all" type="text/css" />')])]),e._v(" "),i("h2",{attrs:{id:"creating-the-midi"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-midi"}},[e._v("#")]),e._v(" Creating the MIDI")]),e._v(" "),i("p",[e._v("After doing the above steps to load the CSS and the sound fonts, the simplest way to produce the MIDI is:")]),e._v(" "),i("p",[i("code",[e._v('window.ABCJS.renderMidi("id-of-div-to-place-midi-controls", abcString, {}, { generateInline: true }, {});')])]),e._v(" "),i("h2",{attrs:{id:"example"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),i("p",[e._v("See the examples in this repository. They contain the prerequisite files. "),i("RouterLink",{attrs:{to:"/examples/editor-midi.html"}},[e._v("Editor")]),e._v(", "),i("RouterLink",{attrs:{to:"/examples/printable.html"}},[e._v("Printable")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);