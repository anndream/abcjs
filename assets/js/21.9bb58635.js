(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{310:function(t,e,a){var s=a(1),n=a(4),r=a(103),o=[].slice,i=function(t){return function(e,a){var s=arguments.length>2,n=s?o.call(arguments,2):void 0;return t(s?function(){("function"==typeof e?e:Function(e)).apply(this,n)}:e,a)}};s({global:!0,bind:!0,forced:/MSIE .\./.test(r)},{setTimeout:i(n.setTimeout),setInterval:i(n.setInterval)})},574:function(t,e,a){"use strict";a.r(e);a(310);var s={mounted:function(){var t=this;setTimeout((function(){t.callbacks=[t.$refs.timingCallbacks]}),500)},data:function(){return{callbacks:[]}}},n=a(45),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"timing-callbacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timing-callbacks"}},[t._v("#")]),t._v(" Timing Callbacks")]),t._v(" "),a("p",[t._v("This runs an animation timer and does callbacks at various intervals. This allows you to do various effects that are timed with beats or playing notes.")]),t._v(" "),a("h2",{attrs:{id:"creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creation"}},[t._v("#")]),t._v(" Creation")]),t._v(" "),a("p",[t._v("To use this create an instance of it:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" timingCallbacks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("abcjs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TimingCallbacks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("visualObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameters")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("visualObj")]),t._v(" "),a("td",[t._v("This is the output of the "),a("code",[t._v("renderAbc()")]),t._v(" call. It is the music that will be timed.")])]),t._v(" "),a("tr",[a("td",[t._v("params")]),t._v(" "),a("td",[t._v("This is a object. See below for the possible properties.")])])])]),t._v(" "),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("qpm")])]),t._v(" "),a("td",[t._v("whatever is in the Q: field")]),t._v(" "),a("td",[t._v("Number of beats per minute.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("extraMeasuresAtBeginning")])]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("Don't start the callbacks right away, but insert this number of measures first.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("beatCallback")])]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("Called for each beat passing the beat number (starting at 0).")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("eventCallback")])]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("Called for each event (either a note, a rest, or a chord, and notes in separate voices are grouped together.)")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("lineEndCallback")])]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("Called at the end of each line. (This is useful if you want to be sure the music is scrolled into view at the right time.) See "),a("code",[t._v("lineEndAnticipation")]),t._v(" for more details.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("lineEndAnticipation")])]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("The number of milliseconds for the "),a("code",[t._v("lineEndCallback")]),t._v(" to anticipate end of the line. That is, if you want to get the callback half a second before the end of the line, use 500.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("beatSubdivisions")])]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("How many callbacks should happen for each beat. This allows finer control in the client, for instance, to handle a progress bar.")])])])]),t._v(" "),a("h2",{attrs:{id:"callbacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#callbacks"}},[t._v("#")]),t._v(" Callbacks")]),t._v(" "),a("h3",{attrs:{id:"beatcallback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beatcallback"}},[t._v("#")]),t._v(" beatCallback")]),t._v(" "),a("p",[t._v("This is called once for every beat in the tune. It is called one additional time when the tune is finished.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beatCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("beatNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" totalBeats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" totalTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" debugInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("beatNumber")]),t._v(" "),a("td",[t._v("Zero-based beat number. Usually this will increment sequentially and regularly, but if javascript is paused long enough (for instance, if the browser tab is changed), then there may be a number of these calls at once when it catches up.")])]),t._v(" "),a("tr",[a("td",[t._v("totalBeats")]),t._v(" "),a("td",[t._v("The total number of beats (including all repeats) that will be played.")])]),t._v(" "),a("tr",[a("td",[t._v("totalTime")]),t._v(" "),a("td",[t._v("The total number of milliseconds of the tune.")])]),t._v(" "),a("tr",[a("td",[t._v("position")]),t._v(" "),a("td",[t._v("The interpolated position of the cursor if the beat occurs between notes. This is an object with the attributes { left: , top: , height: } This can be used to smooth out the cursor by moving it on the beat callbacks. The higher the number of "),a("code",[t._v("beatSubdivisions")]),t._v(" the smoother the cursor will be.")])]),t._v(" "),a("tr",[a("td",[t._v("debugInfo")]),t._v(" "),a("td",[t._v("A hash of some extra info that might be useful in figuring out why the callback was triggered.")])])])]),t._v(" "),a("h3",{attrs:{id:"eventcallback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventcallback"}},[t._v("#")]),t._v(" eventCallback")]),t._v(" "),a("p",[t._v('This is called once for every "event" in time - either a note or a rest. If there are multiple notes at the same time, then it is only called once\nfor that group of notes.')]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("eventCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ev")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The parameter "),a("code",[t._v("ev")]),t._v(" is an object that looks like this:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("ev "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"event"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// This is always "event"')]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"milliseconds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The number of milliseconds from the beginning of the piece")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"millisecondsPerMeasure"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The number of milliseconds per measure")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"line"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// The current "line", that is, the staff system.')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"measureNumber"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The measure number. Resets per line, so the first measure number on a line is zero.")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"top"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The number of pixels from the top of the svg that the note appears.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"height"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The height of the note, in pixels. ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"left"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The number of pixels from the left edge of the svg.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"width"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The width of the note")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"elements"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Array of the actual elements on the page that are represented by the note or notes.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"startCharArray"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the character position in the original abc string")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"endCharArray"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the character position in the original abc string")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"midiPitches"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Array of the currently playing pitches")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pitch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The pitch number (based on the midi standard, i.e. middle C is 60)")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"durationInMeasures"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the note value as a fraction. (that is, a quarter note is 0.025)")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"volume"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The volume expressed as a number between 0 and 127")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"instrument"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The instrument number (based on the midi standard, i.e. acoustic_grand_piano is 0)")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("The "),a("code",[t._v("startCharArray")]),t._v(" and "),a("code",[t._v("endCharArray")]),t._v(" are arrays because there is more than one location in the abc string if there is more than one voice.")])]),t._v(" "),a("li",[a("p",[t._v("The format of the "),a("code",[t._v("elements")]),t._v(" array is subject to change in future versions.")])]),t._v(" "),a("li",[a("p",[t._v("This is called one last time with passing in "),a("code",[t._v("null")]),t._v(" at the end of the tune. On that call "),a("code",[t._v("eventCallback")]),t._v(' can return the string "continue" to keep the timer from stopping. This is useful if you want to play on repeat - in theory you would probably have another call to '),a("code",[t._v("seek()")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("This function can be a Promise or not.")])])]),t._v(" "),a("h3",{attrs:{id:"lineendcallback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lineendcallback"}},[t._v("#")]),t._v(" lineEndCallback")]),t._v(" "),a("p",[t._v("This will be called as the cursor is approaching the end of a line of music. This is useful if there is more than a screen's worth of music; it can be used to scroll the page at the right time.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lineEndCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" details")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The parameter "),a("code",[t._v("info")]),t._v(" looks like this:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("info "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"milliseconds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// current milliseconds from beginning of piece")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"top"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The number of pixels from the top of the svg to the top of the cursor")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bottom"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The number of pixels from the top of the svg to the bottom of the cursor")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The parameter "),a("code",[t._v("event")]),t._v(" is the standard note event.")]),t._v(" "),a("p",[t._v("The parameter "),a("code",[t._v("details")]),t._v(" looks like this:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("details "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"line"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the current line number (zero-based)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"endTimings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" array "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the array of the timings for each line")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("endTimings")]),t._v(" array elements are of the same type as the "),a("code",[t._v("info")]),t._v(" parameter.")]),t._v(" "),a("h2",{attrs:{id:"functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),a("p",[t._v("These are the entry points that can be called on the "),a("code",[t._v("timingCallbacks")]),t._v(" object.")]),t._v(" "),a("h3",{attrs:{id:"start-offsetpercent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-offsetpercent"}},[t._v("#")]),t._v(" start(offsetPercent)")]),t._v(" "),a("p",[t._v("This starts the timer that triggers the callbacks. This is called to both start and resume after calling pause.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("code",[t._v("offsetPercent")]),t._v(" value")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("undefined")]),t._v(" "),a("td",[t._v("If the previous call was to "),a("code",[t._v("pause()")]),t._v(", then the animation continues from where it left off. If there was no pause, then the animation starts from the beginning.")])]),t._v(" "),a("tr",[a("td",[t._v("From 0 to 1")]),t._v(" "),a("td",[t._v("The percentage into the animation to jump to. This is like doing a seek first.")])])])]),t._v(" "),a("h3",{attrs:{id:"pause"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pause"}},[t._v("#")]),t._v(" pause()")]),t._v(" "),a("p",[t._v("Pauses the animation. Calling "),a("code",[t._v("start()")]),t._v(" afterwards will resume from where it left off.")]),t._v(" "),a("h3",{attrs:{id:"stop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop"}},[t._v("#")]),t._v(" stop()")]),t._v(" "),a("p",[t._v("Stop the animation. After calling this, the next call to "),a("code",[t._v("start()")]),t._v(" will start at the beginning.")]),t._v(" "),a("h3",{attrs:{id:"reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[t._v("#")]),t._v(" reset()")]),t._v(" "),a("p",[t._v("Move the timer back to the beginning, so the animation starts over. This can be called either when the animation is currently running or when it is paused.")]),t._v(" "),a("h3",{attrs:{id:"setprogress-percent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setprogress-percent"}},[t._v("#")]),t._v(" setProgress(percent)")]),t._v(" "),a("p",[t._v("Change the position of the animation. This allows random access to any place in the tune. The "),a("code",[t._v("percent")]),t._v(" passed in is a number between 0 and 1. This can be called either when the animation is currently running or when it is paused.")]),t._v(" "),a("h3",{attrs:{id:"replacetarget-visualobj"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replacetarget-visualobj"}},[t._v("#")]),t._v(" replaceTarget(visualObj)")]),t._v(" "),a("p",[t._v("If the underlying music changes on the fly, this replaces the current object without having to destroy the object and start over. "),a("code",[t._v("visualObj")]),t._v(" is the return value from "),a("code",[t._v("renderAbc")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("p",[t._v('Paste in any ABC you want here then click "start" to see what is returned by the timing callbacks:')]),t._v(" "),a("example-tune-book",{attrs:{callbacks:t.callbacks,"tune-id":32}}),t._v(" "),a("timing-callbacks",{ref:"timingCallbacks",attrs:{target:"#abc"}})],1)}),[],!1,null,null,null);e.default=r.exports}}]);