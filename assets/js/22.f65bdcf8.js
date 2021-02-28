(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{310:function(t,e,s){var a=s(1),v=s(4),r=s(103),_=[].slice,n=function(t){return function(e,s){var a=arguments.length>2,v=a?_.call(arguments,2):void 0;return t(a?function(){("function"==typeof e?e:Function(e)).apply(this,v)}:e,s)}};a({global:!0,bind:!0,forced:/MSIE .\./.test(r)},{setTimeout:n(v.setTimeout),setInterval:n(v.setInterval)})},575:function(t,e,s){"use strict";s.r(e);s(310);var a={mounted:function(){var t=this;setTimeout((function(){t.callbacks=[t.$refs.foundClasses]}),500)},data:function(){return{callbacks:[]}}},v=s(45),r=Object(v.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#classes"}},[t._v("#")]),t._v(" Classes")]),t._v(" "),s("h2",{attrs:{id:"class-names"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class-names"}},[t._v("#")]),t._v(" Class Names")]),t._v(" "),s("p",[t._v("If you use, "),s("code",[t._v("{ add_classes: true }")]),t._v(", then the following classes are attached to various elements:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("class")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("abcjs-annotation")]),t._v(" "),s("td",[t._v("Text added with the "),s("code",[t._v('"^..."')]),t._v(" format.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-author")]),t._v(" "),s("td",[t._v("The author text")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-bar")]),t._v(" "),s("td",[t._v("The bar lines.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-bar-number")]),t._v(" "),s("td",[t._v("The bar numbers.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-beam-elem")]),t._v(" "),s("td",[t._v("The beams connecting eighth notes together.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-brace")]),t._v(" "),s("td",[t._v("The brace on the left side of the staff (like for piano music.)")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-bracket")]),t._v(" "),s("td",[t._v("The bracket on the left side of the staff.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-chord")]),t._v(" "),s("td",[t._v("The chord symbols, specified in quotes.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-clef")]),t._v(" "),s("td",[t._v("All clefs")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-composer")]),t._v(" "),s("td",[t._v("The composer text")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-d0-25, etc.")]),t._v(" "),s("td",[t._v("The duration of the note. (Replace the dash with a decimal point. That is, the example is a duration of 0.25, or a quarter note.)")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-decoration")]),t._v(" "),s("td",[t._v("Everything to do with the extra symbols, like crescendo.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-defined-text")]),t._v(" "),s("td",[t._v("Text that appears between the lines of music, created with "),s("code",[t._v("%%text")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-dynamics")]),t._v(" "),s("td",[t._v("The dynamics markings: "),s("code",[t._v("p")]),t._v(" for instance. Also the crescendo mark.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-end-m0-n0")]),t._v(" "),s("td",[t._v("Added to slurs to indicate the ending note.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-ending")]),t._v(" "),s("td",[t._v("The line and decoration for the 1st and 2nd ending.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-key-signature")]),t._v(" "),s("td",[t._v("All key signatures")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-l0, abcjs-l1, etc.")]),t._v(" "),s("td",[t._v("(lower case L, followed by a number) The staff line number, starting at zero.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-ledger")]),t._v(" "),s("td",[t._v("ledger line.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-lyric")]),t._v(" "),s("td",[t._v("The lyric line.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-m0, abcjs-m1, etc.")]),t._v(" "),s("td",[t._v("The measure count from the START OF THE LINE.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-mm0, abcjs-mm1, etc.")]),t._v(" "),s("td",[t._v("The measure count from the START OF THE TUNE.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-meta-bottom")]),t._v(" "),s("td",[t._v("Everything that is printed after all the music.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-meta-top")]),t._v(" "),s("td",[t._v("Everything that is printed before the first staff line.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-n0, abcjs-n1, etc.")]),t._v(" "),s("td",[t._v("The note count from the START OF THE MEASURE.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-note")]),t._v(" "),s("td",[t._v("Everything to do with a note.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-note_selected")]),t._v(" "),s("td",[t._v("This is the element that the user has clicked on.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-p-1, abcjs-p1, etc.")]),t._v(" "),s("td",[t._v("The y-position of the note (where middle-C is zero).")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-part")]),t._v(" "),s("td",[t._v("Each part marking in the music itself.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-part-order")]),t._v(" "),s("td",[t._v("The part order indicator at the top.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-rest")]),t._v(" "),s("td",[t._v("Everything to do with a rest.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-rhythm")]),t._v(" "),s("td",[t._v("The rhythm text.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-slur")]),t._v(" "),s("td",[t._v("Slurs and ties. (backwards compatible)")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-start-m0-n0")]),t._v(" "),s("td",[t._v("Added to slurs to indicate the beginning note.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-tie")]),t._v(" "),s("td",[t._v("Tie.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-legato")]),t._v(" "),s("td",[t._v('Slur. Because "abcjs-slur" was historically used to indicate either a slur or a tie this indicates only a slur.')])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-staff")]),t._v(" "),s("td",[t._v("The horizontal lines that make up the staff.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-staff-extra")]),t._v(" "),s("td",[t._v("Clefs, key signatures, time signatures.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-stem")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("abcjs-subtitle")]),t._v(" "),s("td",[t._v("The subtitle, both on the top and inserted in the middle")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-symbol")]),t._v(" "),s("td",[t._v("Any special symbol, like a trill.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-tempo")]),t._v(" "),s("td",[t._v("The tempo marking.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-text")]),t._v(" "),s("td",[t._v("Extra text that is not part of the music.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-time-signature")]),t._v(" "),s("td",[t._v("All time signatures")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-title")]),t._v(" "),s("td",[t._v("The line specified by T:")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-top-line")]),t._v(" "),s("td",[t._v("This marks the top line of each staff. This is useful if you are trying to find where on the page the music has been drawn.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-top-of-system")]),t._v(" "),s("td",[t._v("This marks the top of each set of staves. This is useful if you are trying to find where on the page the music has been drawn.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-triplet")]),t._v(" "),s("td",[t._v("The extra markings that indicate a triplet. (But not the notes themselves.)")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-unaligned-words")]),t._v(" "),s("td",[t._v("Lyrics at the bottom that aren't lined up with notes.")])]),t._v(" "),s("tr",[s("td",[t._v("abcjs-v0, abcjs-v1, etc.")]),t._v(" "),s("td",[t._v("the voice number, starting at zero.")])])])]),t._v(" "),s("h2",{attrs:{id:"test-tune"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-tune"}},[t._v("#")]),t._v(" Test Tune")]),t._v(" "),s("p",[t._v("Paste in any ABC you want here and see how that affects the classes below:")]),t._v(" "),s("example-tune-book",{attrs:{callbacks:t.callbacks,"tune-id":32}}),t._v(" "),s("h2",{attrs:{id:"found-classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#found-classes"}},[t._v("#")]),t._v(" Found Classes")]),t._v(" "),s("p",[t._v("Select the following classes to see what they point to. (They are ANDed together.)")]),t._v(" "),s("found-classes",{ref:"foundClasses",attrs:{target:"#paper"}}),t._v(" "),s("h2",{attrs:{id:"css-possibilities"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-possibilities"}},[t._v("#")]),t._v(" CSS Possibilities")]),t._v(" "),s("h3",{attrs:{id:"changing-colors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changing-colors"}},[t._v("#")]),t._v(" changing colors")]),t._v(" "),s("p",[t._v("If you want to just change everything to one other color, you can do something like:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<style>\n    svg {\n        fill: pink;\n        stroke: pink;\n    }\n<style>\n")])])]),s("p",[t._v("If you want more control, you can use the classes. For instance, to turn only the horizontal staff lines pink, do this instead:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<style>\n    svg .abcjs-staff {\n        fill: pink;\n        stroke: pink;\n    }\n<style>\n")])])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);