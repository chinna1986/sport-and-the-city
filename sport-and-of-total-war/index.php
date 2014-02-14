<?php include('../app/bootstrap.php'); ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Sub-Main | Sport and the City</title>
        <meta name="description" content="">
        <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <!-- Mobile viewport optimized: h5bp.com/viewport -->
        <meta name="viewport" content="width=device-width">
        <!-- 1. jquery library -->
        <script type="text/javascript"
           src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js">
        </script>
         
        <!-- 2. flowplayer -->
        <script type="text/javascript"
           src="//releases.flowplayer.org/5.4.2/flowplayer.min.js">
        </script>
         
        <!-- 3. skin -->
        <link rel="stylesheet" type="text/css"
           href="//releases.flowplayer.org/5.4.2/skin/minimalist.css">

        <?php _style(); ?>


    </head>
    <body class="bg-total">
    <!-- <body class="bg-total" data-background="url(/assets/background.jpg)" data-start="-75" data-end="0"> -->
    <?php _header(); ?>

    <div id="content" class="content">
       <ul id="wrapper" class="wrapper">
          <li class="one">
          <div class="title"></div>
           <p class="big-title"  data-i18n="Sport and Total War"></p>
            <div class="carousel slide">
              <div class="carousel-inner">
                <div class="active item">
                  <img src="assets/title.jpg" alt="img" title="img"/>
                </div>
              </div>
            </div>
          </li>

       <li class="simple-one">
          <div class="title" data-i18n="Great War: 1914-1918"></div>
          <ul>
            <li>
              <a href="great-war/sport-and-the-great-war-1914-1918/" 
                 data-modal="modal"
                 data-src="great-war/sport-and-the-great-war-1914-1918/" 
                 onclick="return false;">
                <img src="assets/thumbs/thumb-1.jpg">
                <span class="bg-total" data-i18n="Sport and the Great War"></span>
              </a>
            </li>
          </ul>
        </li>

        <li class="two">
            <div class="title" data-i18n="Second World War"></div>
            <ul>
              <li>
                <a href="second-world-war/sport-and-the-second-world-war/" 
                   data-modal="modal"
                   data-src="second-world-war/sport-and-the-second-world-war/" 
                   onclick="return false;">
                  <img src="assets/thumbs/thumb-2.jpg">
                  <span class="bg-total" data-i18n="Sport and the Second World War"></span>
                </a>
              </li>
              <li>
                <a href="second-world-war/sport-in-the-camps-escape-from-war/" 
                   data-modal="modal"
                   data-src="second-world-war/sport-in-the-camps-escape-from-war/" 
                   onclick="return false;">
                  <img src="assets/thumbs/thumb-3.jpg">   
                  <span class="bg-total" data-i18n="Sport in the Camps: Escape from War"></span>
                </a>
              </li>
            </ul>
        </li>
        <li class="three-about">
          <div class="title" data-i18n="Navigation"></div>
          <ul>
            <li>
              <a href="/">
                <img src="">
                <span data-i18n="back to Home Page"></span>
              </a>
            </li>
            <li>
              <a href="/sport-in-multiethnic-city/">
                <span data-i18n="Sport in Multiethnic City"></span>
              </a>
            </li>
            <li>
              <a href="/sportsin-soviet-cities-1939-1991/">
                <span data-i18n="Sport in Soviet City 1939-1991"></span>
              </a>
            </li>
            </ul>
        </li>
   



      </ul>
    </div><!-- /#content -->

    <div id="scroller" class="scroller">
      <div id="scroller-bar"></div>
    </div>

    <?php _footer(); ?>

    <?php _script(); ?>
  </body>
</html>