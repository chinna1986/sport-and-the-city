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
    <body data-background="url(/assets/background.jpg)" data-start="-75" data-end="0">

    <?php _header(); ?>

    <div id="content" class="content">
       <ul id="wrapper" class="wrapper">
            <li class="one">
          <div class="title"></div>
          <!-- <p class="big-title">СПОРТ І МІСТО:<br>ЛЮДИНА. СУСПІЛЬСТВО.<br/> ІДЕОЛОГІЯ.</p> -->
          <div id="index-carousel" class="carousel slide">
          
            <div class="carousel-inner">
              <div class="active item">
                <img src="/assets/exhibition-photos/1.jpg" alt="img" title="img"/> 
              </div>
              <div class="item">
                <img src="/assets/exhibition-photos/2.jpg" alt="img" title="Sport and the City"/>
              </div>   
              <div class="item">
                <img src="/assets/exhibition-photos/3.jpg" alt="img" title="Sport and the City"/>
              </div>   
              <div class="item">
                <img src="/assets/exhibition-photos/4.jpg" alt="img" title="Sport and the City"/>
              </div>   
              <div class="item">
                <img src="/assets/exhibition-photos/5.jpg" alt="img" title="Sport and the City"/>
              </div>   
              <div class="item">
                <img src="/assets/exhibition-photos/6.jpg" alt="img" title="Sport and the City"/>
              </div>   
              <div class="item">
                <img src="/assets/exhibition-photos/7.jpg" alt="img" title="Sport and the City"/>
              </div>   
              <div class="item">
                <img src="/assets/exhibition-photos/8.jpg" alt="img" title="Sport and the City"/>
              </div>                 
              <div class="item">
                <img src="/assets/exhibition-photos/9.jpg" alt="img" title="Sport and the City"/>
              </div>               
              <div class="item">
                <img src="/assets/exhibition-photos/10.jpg" alt="img" title="Sport and the City"/>
              </div>   

              <div class="item">
                <img src="/assets/exhibition-photos/11.jpg" alt="img" title="Sport and the City"/>
              </div>   

              <div class="item">
                <img src="/assets/exhibition-photos/12.jpg" alt="img" title="Sport and the City"/>
              </div>   
              <div class="item">
                <img src="/assets/exhibition-photos/13.jpg" alt="img" title="Sport and the City"/>
              </div>   

              <div class="item">
                <img src="/assets/exhibition-photos/14.jpg" alt="img" title="Sport and the City"/>
              </div>   
              <div class="item">
                <img src="/assets/exhibition-photos/15.jpg" alt="img" title="Sport and the City"/>
              </div>   

              <div class="item">
                <img src="/assets/exhibition-photos/15.jpg" alt="img" title="Sport and the City"/>
              </div>   
              <div class="item">
                <img src="/assets/exhibition-photos/16.jpg" alt="img" title="Sport and the City"/>
              </div>   

              <div class="item">
                <img src="/assets/exhibition-photos/17.jpg" alt="img" title="Sport and the City"/>
              </div>   
              <div class="item">
                <img src="/assets/exhibition-photos/18.jpg" alt="img" title="Sport and the City"/>
              </div>   

              <div class="item">
                <img src="/assets/exhibition-photos/19.jpg" alt="img" title="Sport and the City"/>
              </div>   
              <div class="item">
                <img src="/assets/exhibition-photos/20.jpg" alt="img" title="Sport and the City"/>
              </div>   













            </div>





            <a class="carousel-control left" href="#index-carousel" data-slide="prev">&lsaquo;</a>
            <a class="carousel-control right" href="#index-carousel" data-slide="next">&rsaquo;</a>
          </div>
        </li>
<!--
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
                    <div class="multicol" style="width:1320px">
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

    <script type="text/i18n" id="header-title-text-en">«Sport and the City:  People. Society. Ideology»</script>
    <script id='title-text-en' type="text/i18n">
      <p>Exhibition offers you an opportunity to learn more about the meaning of sports, besides competition, entertainment and spectacle. It traces the history of sports in Lviv (also known as Lwów and Lemberg) throughout the last 150 years: the beginnings of sports in Europe, and particularly in the city; how our ideas about sports have changed; how new types of sports emerged; the connections between sports and nationalism, sports and government, sports and commerce, sports and globalization. Particularly interesting in the context of EURO-2012 is the question of fan culture and the potential of sports mega-events for the city. This exposition shows different meanings connected with sports and allows to formulate own answers to the question, «What was sport, and what is sport today?»</p>
      <p>The exhibition space, thematically divided into five sections, opens with the theme, «Sports as Social and Cultural Practice: History of Transformations.» This section presents the history of sports as a history of modern social and cultural practices. The next section, <a href="/sport-in-multiethnic-city/">«Sports in the Multi-ethnic City, 1861-1939,»</a> focuses attention on Lviv-Lwów-Lemberg itself. Local historical materials connected with the history of the city’s three communities - Ukrainian, Polish, and Jewish - show how sports were a factor and form in the search for new identities. The third section, <a href="/sport-and-of-total-war/">«Sport and War,»</a> examines sports in the conditions of military conflict - during the First and Second World Wars. The following section of the exhibition, <a href="/sportsin-soviet-cities-1939-1991/">«Sport in the Soviet City, 1944-1991,»</a> explores the notion of physical culture, the social status of Soviet athletes, and also how international sports competitions were used in Cold War political struggles, all on the example of Soviet Ukrainian Lviv. The exhibition concludes with the section <a href="/sport-in-global-city/">«Sports in the Global City,»</a> which is dedicated to athletic mega-events as impulses for infrastructure development.</p>
      <p>In connection with the exhibition we will hold a series of lectures, round-tables, discussions, film presentations and an educational program for children. We invite you to follow upcoming announcements at www.lvivcenter.org</p>
      <p>For more information, please contact Andrii Linik, the curator of exhibition projects at the Center for Urban History, tel. 275 17 34 or e-mail a.linik@lvivcenter.org.</p>
      <p>The exhibition is open daily from Wednesdays through Sundays from 11.00 to 17.00. Closed Mondays and Tuesdays.</p>
    </script>

    <script type="text/i18n" id="header-title-text-ua">«Спорт і Місто:  Людина. Суспільство. Ідеологія»</script>
    <script id='title-text-ua' type="text/i18n">
     <p>Виставка пропонує Вам дізнатися чим ще є спорт окрім змагання, розваги та видовища. Тут Ви побачите історію спорту у Львові (також знаному як Lwów та Lemberg) протягом останніх 150 років: якими були початки спорту в Європі та у місті зокрема, як змінювалися уявлення про спорт, як з’являлися нові види спорту, яким був зв’язок між спортом і націоналізмом, спортом і державою, спортом і комерцією, спортом та глобалізацією. Особливо цікавими в контексті «ЄВРО-2012» є питання про культуру вболівання та потенціал спортивних мегаподій для міста. Ця експозиція показує різні значення, пов’язані зі спортом та дозволить Вам сформувати власну відповідь на питання «Чим був і є спорт?»</p>
      <p>Виставковий простір, тематично розділений на п’ять блоків, відкриває тема «Спорт як соціальна і культурна практика: історія змін.» У ній представлено історію спорту як модерної суспільної та культурної практики. Наступний блок <a href="/sport-in-multiethnic-city/">«Спорт у багатоетнічному місті. 1861-1939»</a> фокусує увагу на Львові та використовує локальні історичні матеріали, пов’язані з історією трьох спільнот у місті: української, польської та єврейської. Третій блок <a href="/sport-and-of-total-war/">«Спорт і війна»</a> розглядає спорт в умовах воєнного конфлікту – під час Першої та Другої світових воєн. Наступна частина виставки <a href="/sportsin-soviet-cities-1939-1991/">«Спорт у радянському місті. 1944-1991»</a> на прикладі Львова показує чим були фізична культура, соціальний статус спортсмена у радянській державі, а також як міжнародні спортивні змагання використовувалися у політичній боротьбі під час «холодної війни». Завершує виставку блок <a href="/sport-in-global-city/">«Спорт у глобальному місті»</a>, присвячений великим спортивним подіям як імпульсу для інфраструктурного розвитку.</p>
      <p>В рамках виставки проводитимуться лекції, круглі столи, дискусії, кінопокази та освітня програма для дітей. Запрошуємо слідкувати за анонсами на сайті Центру міської історії www.lvivcenter.org</p>
      <p>За детальнішою інформацією просимо звертатися до куратора виставкових проектів Центру Андрія Лініка за тел. 275 17 34 або е-поштою a.linik@lvivcenter.org</p>
      <p>Виставка відкрита усі дні крім понеділка та вівторка від 11:00 до 17:30</p>
    </script>

    <?php _script(); ?>
  </body>
</html>