# requireJS config
require.config
  baseUrl: 'bower_components'

  paths:
    bootstrap: 'bootstrap/js/',
    jquery: 'jquery/jquery.min',
    underscore: 'underscore/underscore-min',
    angular: 'angular/angular.min',
    less: 'less/dist/less-1.4.1.min'

require ['less'], () ->
  less =
    env: "development",             # or "production"
    async: false,                   # load imports async
    fileAsync: false,               # load imports async when in a page under
                                    # a file protocol
    poll: 1000,                     # when in watch mode, time in ms between polls
    functions: {},                  # user functions, keyed by name
    dumpLineNumbers: "comments",    # or "mediaQuery" or "all"
    relativeUrls: false,            # whether to adjust url's to be relative
                                    # if false, url's are already relative to the
                                    # entry less file
    rootpath: ":/hest.dev/"            # a path to add on to the start of every url
                                    #resource
