<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <title>{{ getTitle }} | {{ this.site.subtitle }}</title>

    {{#each this.site.styles}}<link rel="stylesheet" href="{{ this }}">{{/each}}

  </head>
  <body class="theme-main">
  {{{ this.content }}}
  {{#each this.site.scripts}}<script type="text/javascript" src="{{ this }}"></script>{{/each}}
  </body>
</html>
