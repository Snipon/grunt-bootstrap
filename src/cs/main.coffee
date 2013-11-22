'use strict'
# Conditional nojs/js tag on html tag.
root = document.documentElement
root.className = root.className.replace 'nojs', 'js'

$ () ->
  console.log 'jQuery ' + $.fn.jquery
