<?php include('../app/bootstrap.php'); ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Sub-Main | Sport and city</title>
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
    <body data-background="url(/assets/background.jpg)" data-start="-75" data-end="0">

    <?php _header(); ?>

    <div id="content" class="content">
       <ul id="wrapper" class="wrapper">
           <li class="one">
          <div class="title"></div>
          <div id="index-carousel" class="carousel slide">
          
            <div class="carousel-inner">
              <div class="active item">
                <img src="assets/eng.jpg" alt="img" title="img"/> 
              </div>
            </div>
            <!--
            <a class="carousel-control left" href="#index-carousel" data-slide="prev">&lsaquo;</a>
            <a class="carousel-control right" href="#index-carousel" data-slide="next">&rsaquo;</a>
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
                  <img src="assets/thumbs/thumb-1.jpg">
                  <span class="bg-total" data-i18n="Sport and the Second World War"></span>
                </a>
              </li>
              <li>
                <a href="second-world-war/sport-in-the-camps-escape-from-war/" 
                   data-modal="modal"
                   data-src="second-world-war/sport-in-the-camps-escape-from-war/" 
                   onclick="return false;">
                  <img src="assets/thumbs/thumb-2.jpg">
                  <span class="bg-total" data-i18n="Sport in the Camps: Escape from War"></span>
                </a>
              </li>
            </ul>
        </li>

   -->
<!--               <li>
                 <div class="title"></div> 
                    <div class="multicol">
                            <h3 class="block-title title" data-i18n="Header-title-text" data-i18n-src="#header-title-text"></h3>
                            <p class="block-text"
                                            data-modal="modal" 
                                            data-src="/sport-in-global-city/women-sport/_text-fans.php"
                                            data-i18n="title-text" 
                                            data-i18n-src="#title-text">
                            </p>
                    </div>

                </li> -->

                <!-- MODED -->
              <li>
                 <div class="title"></div> 
                    <div class="multicol" style="width:200px">
                            <h3 class="block-title title" data-i18n="Header-title-text" data-i18n-src="#header-title-text"></h3>
                            <p class="block-text"
                                            data-src="/sport-in-global-city/women-sport/_text-fans.php"
                                            data-i18n="title-text" 
                                            data-i18n-src="#title-text">
                            </p>
                    </div>

                </li>

      </ul>
    </div>

    <!-- /#content -->

    <div id="scroller" class="scroller">
      <div id="scroller-bar"></div>
    </div>

    <?php _footer(); ?>

    <script type="text/i18n" id="header-title-text-en">Thanks to our partners</script>
    <script id='title-text-en' type="text/i18n">
         </script>

    <script type="text/i18n" id="header-title-text-ua">Дякуємо нашим партнерам</script>
    <script id='title-text-ua' type="text/i18n">
         </script>

    <?php _script(); ?>
  </body>
</html>