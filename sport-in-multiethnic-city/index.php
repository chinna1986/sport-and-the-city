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
  <body class="bg-multy" data-background="url(/assets/background.jpg)" data-start="-75" data-end="0">

    <?php _header(); ?>
      
   <div id="content" class="content">
      <ul id="wrapper" class="wrapper">


        <li class="one">
          <div class="title"></div>
          <p class="big-title"  data-i18n="Sport in Multiethnic City"></p>
          <div class="carousel slide">
            <div class="carousel-inner">
              <div class="active item">
                <img src="assets/title.jpg" alt="img" title="img"/>
              </div>
            </div>
          </div>
         </li>
          <li>
                 <div class="title"></div> 
                 
                    <div class="multicol" style="width:227px; padding-right:25px">
                      <!-- <div class="keeptogether"> -->
                            <h3 class="block-title title" data-i18n="Header-title-text" data-i18n-src="#header-title-text"></h3>
                            <p class="block-text"
                                            data-i18n="title-text" 
                                            data-i18n-src="#title-text">
                            </p>
                   <!--  </div> -->
                  </div>
                </li>
        <li class="three">
            <div class="title" data-i18n="Origins of Modern Sport"></div>
            <ul>
              <li>
                <a href="origins-of-modern-sport/Industrialization-and-Modernization/" 
                   data-modal="modal"
                   data-src="origins-of-modern-sport/Industrialization-and-Modernization/" 
                   onclick="return false;">
                  <img src="assets/thumbs/thumb-1.jpg">
                  <span class="bg-multy" data-i18n="Industrialization and Modernization">Індустріалізація і модернізація</span>
                </a>
              </li>
              <li>
                <a href="origins-of-modern-sport/British-Beginnings-of-Sports/" 
                   data-modal="modal"
                   data-src="origins-of-modern-sport/British-Beginnings-of-Sports/" 
                   onclick="return false;">
                  <img src="assets/thumbs/thumb-2.jpg">
                  <span class="bg-multy" data-i18n="«British Beginnings» of Sports">«Британські початки» спорту</span>
                </a>
              </li>
              <li>
                <a href="origins-of-modern-sport/In-Search-of-Moral-Physical-Political-and-Social-Health-for-the-Community/" 
                   data-modal="modal"
                   data-src="origins-of-modern-sport/In-Search-of-Moral-Physical-Political-and-Social-Health-for-the-Community/" 
                   onclick="return false;">
                  <img src="assets/thumbs/thumb-3.jpg">
                  <span class="bg-multy" data-i18n="In Search of Moral, Physical, Political and Social Health for the Community">Гімнастичний рух: у пошуках морального, фізичного, політичного і соціального здоров’я</span>
                </a>
              </li>
            </ul>
        </li>

        <li class="three">
            <div class="title" data-i18n="Sokil Movement"><p>Hello</p></div>
            <ul>
              <li>
                <a href="sokil-movement/the-sokol-societies/"
                   data-modal="modal"
                   data-src="sokil-movement/the-sokol-societies/">
                  <img src="assets/thumbs/thumb-4.jpg">
                  <span class="bg-multy" data-i18n="The Sokol Societies">«Cоколи»</span>
                </a>
              </li>

              <li>
                <a href="sokil-movement/zdvyh-and-zlot-mass-rituals-in-urban-public-space/"
                   data-modal="modsport-in-multiethnic-city"
                   data-src="sokil-movement/zdvyh-and-zlot-mass-rituals-in-urban-public-space/">
                  <img src="assets/thumbs/thumb-5.jpg">
                  <span class="bg-multy" data-i18n="«Zdvyh and Zlot: Mass Rituals in Urban Public Space">Здвиги і злети: масові ритуали у публічному просторі міста</span>
                </a>
              </li>

              <li>
                <a href="sokil-movement/ivan-boberskyi/" 
                      data-modal="modal" 
                      data-src="sokil-movement/ivan-boberskyi/">
                  <img src="assets/thumbs/thumb-6.jpg">
                  <span class="bg-multy" data-i18n="Ivan Boberskyi">Іван Боберський</span>
                </a>
              </li>
            </ul>
        </li>

        <li class="two">
            <div class="title" data-i18n="Football"></div>
            <ul class="block-duet">
              <li>
                <a href="football/lviv-football-between-the-local-and-the-national/"
                   data-modal="modal"
                   data-src="football/lviv-football-between-the-local-and-the-national/">
                  <img src="assets/thumbs/thumb-7.jpg">
                  <span class="bg-multy" data-i18n="Lviv Football: Between the Local and the National">Львівський футбол: між локальним і національним</span>
                </a>
              </li>
              <li>
                <a href="football/the-heroes-of-athletic-lviv/"
                   data-modal="modal"
                   data-src="football/the-heroes-of-athletic-lviv/">
                  <img src="assets/thumbs/thumb-8.jpg">
                  <span class="bg-multy" data-i18n="The Universal Athlete">Універсальний спортсмен</span>
                </a>
              </li>
            </ul>
       </li>

        <li class="two">
          <div >
            <div class="title" data-i18n="Mass Audience">Масова Аудиторія</div>
            <ul class="block-duet">
              <li>
                <a href="mass-audience/sports-and-the-mass-audience/"
                   data-modal="modal"
                   data-src="mass-audience/sports-and-the-mass-audience/">
                  <img src="assets/thumbs/thumb-9.jpg">
                  <span class="bg-multy" data-i18n="Sports and the Mass Audience">Спорт та масова аудиторія</span>
                </a>
              </li>
              <li>
                <a href="mass-audience/the-sports-and-media-complex/"
                   data-modal="modal"
                   data-src="mass-audience/the-sports-and-media-complex/">
                  <img src="assets/thumbs/thumb-10.jpg">
                  <span class="bg-multy" data-i18n="The Sports and media complex">Спортивно-медійний комплекс</span>
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
              <a href="/sport-and-of-total-war/">
                <span data-i18n="Sport and Total War"></span>
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
    <script type="text/i18n" id="header-title-text-en"></script>
    <script id='title-text-en' type="text/i18n">
    <p>This part of the exhibition focuses on how modern sports was born</p>
    <p>in Europe, made its way to Galicia and Lviv, and how the first Ukrainian, Polish and Jewish sports societies and clubs arose. It tells of the emergence of a mass sports audience, and the construction of new sports objects in the cityscape.</p>
    </script>

    <script type="text/i18n" id="header-title-text-ua">Дім: Століття змін</script>
    <script id='title-text-ua' type="text/i18n">
      <p></p>
    </script>

    <?php _script(); ?>
  </body>
</html>
