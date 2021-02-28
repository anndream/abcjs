(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{592:function(t,a,e){"use strict";e.r(a);var s=e(45),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),e("h2",{attrs:{id:"which-flavor-should-you-use"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#which-flavor-should-you-use"}},[t._v("#")]),t._v(" Which flavor should you use?")]),t._v(" "),e("h3",{attrs:{id:"node-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[t._v("#")]),t._v(" node.js")]),t._v(" "),e("p",[t._v("If you are in the node ecosystem, simply install the packaged version with:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm install --save abcjs\n")])])]),e("p",[t._v("To import, use:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import abcjs from "abcjs";\n')])])]),e("p",[t._v("To get the styles for the audio control:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import 'abcjs/abcjs-audio.css';\n")])])]),e("h3",{attrs:{id:"old-style-minimized-download"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#old-style-minimized-download"}},[t._v("#")]),t._v(" Old-style minimized download")]),t._v(" "),e("p",[t._v("If you are writing significant JavaScript on your site, and you are generating the music yourself, or you are allowing the user to enter music using ABC notation, whether a whole tune or a fragment, then you probably want to use "),e("code",[t._v("abcjs-basic")]),t._v(". This gives you  control over the generation in a smaller package.")]),t._v(" "),e("p",[t._v("If you already have ABC notation on your page and don't want to modify the page more than you have to, then you can use "),e("code",[t._v("abcjs-plugin")]),t._v(", which will render all ABC that it finds on the page on page load, simply by including one line: the line to include the script. Another use of this is if you have a comment section on a blog, then you can allow users to post ABC tunes and they will appear as sheet music automatically.")]),t._v(" "),e("p",[t._v("If you are looking at someone else's website and see ABC on the page and want to see what it looks like in standard notation, you can install the greasemonkey script in FireFox or Chrome and it will render the ABC for you.")]),t._v(" "),e("p",[t._v("Here are the latest versions. You can just download one of these:")]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://raw.githubusercontent.com/paulrosen/abcjs/main/dist/abcjs-basic-min.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Basic"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://raw.githubusercontent.com/paulrosen/abcjs/main/dist/abcjs-plugin-min.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Plugin"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://raw.githubusercontent.com/paulrosen/abcjs/main/abcjs-audio.css",target:"_blank",rel:"noopener noreferrer"}},[t._v("Styles for the Audio control"),e("OutboundLink")],1)])])]),t._v(" "),e("p",[e("strong",[t._v("NOTE: Do NOT link to these files directly! Upload them to your own server! "),e("a",{attrs:{href:"https://github.com/blog/1482-heads-up-nosniff-header-support-coming-to-chrome-and-firefox",target:"_blank",rel:"noopener noreferrer"}},[t._v("Here's why."),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("When loading the library directly, you will find the library at "),e("code",[t._v("window.ABCJS")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"simplest-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simplest-usage"}},[t._v("#")]),t._v(" Simplest Usage")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("paper"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("abcjs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderAbc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paper"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X:1\\nK:D\\nDDAA|BBA2|\\n"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);