<?php include('../app/bootstrap.php'); ?>
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Sub-Main | Sport and city</title>
    <meta name="description" content="">
    <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <!-- Mobile viewport optimized: h5bp.com/viewport -->
    <meta name="viewport" content="width=device-width">
    
    <?php _style(); ?>
  </head>
  <body class="bg-global">
  <!-- <body class="bg-global" data-background="url(/assets/background.jpg)" data-start="-75" data-end="0"> -->

    <?php _header(); ?>
      
   <div id="content" class="content">
      <ul id="wrapper" class="wrapper">


        <li class="one">
          <div class="title"></div>
          <p class="big-title"  data-i18n="Sport in Global City"></p>
          <div class="carousel slide">
            <div class="carousel-inner">
              <div class="active item">
                <img src="assets/title.jpg" alt="img" title="img"/>
              </div>
            </div>
          </div>
        </li>

        <li class="four">
            <div class="title" data-i18n="Global Sports for a Globalized World"></div>
            <ul>
              <li>
                <a href="global-sports-for-a-globalized-world/global-sports-for-a-globalized-world/" 
                   data-modal="modal"
                   data-src="global-sports-for-a-globalized-world/global-sports-for-a-globalized-world/" 
                   onclick="return false;">
                  <img src="assets/thumbs/thumb-1.jpg">
                  <span class="bg-global" data-i18n="Global Sports for a Globalized World"></span>
                </a>
              </li>
              <li>
                <a href="global-sports-for-a-globalized-world/hopes-and-achievements-can-sport-change-the-world" 
                   data-modal="modal"
                   data-src="global-sports-for-a-globalized-world/hopes-and-achievements-can-sport-change-the-world/" 
                   onclick="return false;">
                  <img src="assets/thumbs/thumb-2.jpg">
                  <span class="bg-global" data-i18n="Hopes and Achievements: Can Sport Change the World?"></span>
                </a>
              </li>
              <li>
                <a href="global-sports-for-a-globalized-world/scandal-and-sensation/" 
                   data-modal="modal"
                   data-src="global-sports-for-a-globalized-world/scandal-and-sensation/" 
                   onclick="return false;">
                  <img src="assets/thumbs/thumb-3.jpg">
                  <span class="bg-global" data-i18n="Scandal and Sensation"></span>
                </a>
              </li>
              <li>
                <a href="global-sports-for-a-globalized-world/sport-as-a-commodity/" 
                   data-modal="modal"
                   data-src="global-sports-for-a-globalized-world/sport-as-a-commodity/" 
                   onclick="return false;">
                  <img src="assets/thumbs/thumb-4.jpg">
                  <span class="bg-global" data-i18n="Sport as a commodity"></span>
                </a>
              </li>              
            </ul>
        </li>

        <li class="four">
            <div class="title"></div>
            <ul>
              <li>
                  <a href="sports-mega-event/"
                   data-modal="modal"
                   data-src="sports-mega-event/">
                  <img src="assets/thumbs/thumb-5.jpg">
                  <span class="bg-global" data-i18n="Sports Mega-event"></span>
                </a>
              </li>
              <li>
                <a href="lviv-london-infrastructure-decisions/"
                   data-modal="modal"
                   data-src="lviv-london-infrastructure-decisions/">
                  <img src="assets/thumbs/thumb-6.jpg">
                  <span class="bg-global" data-i18n="Lviv – London: Infrastructure Decisions"></span>
                </a>
              </li>
              <li>
                <a href="ultras-and-football-hooliganism/"
                   data-modal="modal"
                   data-src="ultras-and-football-hooliganism/">
                  <img src="assets/thumbs/thumb-7.jpg">
                  <span class="bg-global" data-i18n="“Ultras” and “football hooliganism”"></span>
                </a>
              </li>
              <li>
                <a href="womens-sports/"
                   data-modal="modal"
                   data-src="womens-sports/">
                  <img src="assets/thumbs/thumb-8.jpg">
                  <span class="bg-global" data-i18n="Women’s Sports"></span>
                </a>
              </li>
            </ul>
        </li>
        <li class="two">
            <div class="title"></div>
            <ul>
              <li>
                <a href="cycling-aport-or-transport/"
                   data-modal="modal"
                   data-src="cycling-aport-or-transport/">
                  <img src="assets/thumbs/thumb-9.jpg">
                  <span class="bg-global" data-i18n="Cycling: Sport or Transport"></span>
                </a>
              </li>
              <li>
                <a href="cyber-sports/"
                   data-modal="modal"
                   data-src="cyber-sports/">
                  <img src="assets/thumbs/thumb-10.jpg">
                  <span class="bg-global" data-i18n="Cyber Sports"></span>
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
              <a href="/sportsin-soviet-cities-1939-1991/">
                <img src="assets/title.jpg" alt="img" title="img"/>
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
