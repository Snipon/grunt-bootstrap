'use strict'
# Conditional nojs/js tag on html tag.
root = document.documentElement
root.className = root.className.replace 'nojs', 'js'

# Init jQuery.
$ () ->
  # Print jQuery.
  console.log 'jQuery ' + $.fn.jquery
