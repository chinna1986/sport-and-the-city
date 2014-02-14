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
          
          <div id="index-carousel" class="carousel slide">
          
            <div class="carousel-inner">
              <div class="active item">
                <img src="assets/1.jpg" alt="img" title="img"/> 
              </div>
            </div>
<!-- 
            <a class="carousel-control left" href="#index-carousel" data-slide="prev">&lsaquo;</a>
            <a class="carousel-control right" href="#index-carousel" data-slide="next">&rsaquo;</a>
 -->          </div>
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
                    <div class="multicol" style="width:1000px">
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

    <script type="text/i18n" id="header-title-text-en">The exhibition created by</script>
    <script id='title-text-en' type="text/i18n">
      <h4>Curator:</h4>
      <p>Andriy Linik</p>
      
      <h4>Authors:</h4>
      <p>Andriy Bondarenko, Oksana Dudko, Khrystyna Semanyuk</p>
      
      <h4>Editing and translation:</h4>
      <p>Mayhill Fowler, Natalka Rymska</p>
      
      <h4>Design:</h4>
      <p>Lavrin Shymin, Viktoria Fedynets</p>
      
      <h4>Technical support and programming:</h4>
      <p>Ivan Solsky, Yuriy Sushko, Mykhailo Bobusky, Oleksandr Paziuk, Yuriy Bishko, Dariy Solsky, Yuriy Baturynsky, Andriy Fedyk</p>
      
      <h4>Special exhibition programs:</h4>
      <p>Mariana Kuzemska, Khrystyna Boyko, Andriy Linik, Bohdan Shumylovych, Andriy Bondarenko</p>
      
      <h4>Acknowledgments for visual materials:</h4>
      <p>Lesia Krypyakevych (collection of Professor Stepan Hayduchok), Ivan Yaremko, Olga Linkiewicz, Arnold Prokhorov, Borys Yasinovsky, Vyacheslav Afonin, Yuriy Nazarkevych,  Yevhen Kravs, Andrij Bojarov, Iryna Kotlobulatova, Ihor Kotlobulatov, Nikolay Smirnov and Sport Club «Eurosport», State Archive of Lviv Region, Library of the Institute of Ethnography of the National Academy of Sciences of Ukraine, Vasyl Stefanyk National Scientific Library of Ukraine in Lviv, H. S. Pshenychnyi Central State Cinema, Photo Archive of Ukraine in Kyiv</p>
      
      <h4>Acknowledgments:</h4>
      <p>Oksana Hrechanyuk, Myroslav Hertsyk, Ihor Kulchytsky, Olena Turianska, Ihor Dobriansky, Roman Lozynsky, Bohdan Shumylovych, Iryna Matsevko, Nadia Drozhzhyna, Zoriana
    Slyusarchuk</p>
    </script>

    <script type="text/i18n" id="header-title-text-ua">Над виставкою працювали</script>
    <script id='title-text-ua' type="text/i18n">
      <h4>Куратор:</h4>
      <p>Андрій Лінік</p>
      
      <h4>Автори:</h4>
      <p>Андрій Бондаренко, Оксана Дудко, Христина Семанюк</p>
      
      <h4>Редагування і переклад:</h4>
      <p>Наталка Римська, Мейгіл Фовлер</p>
      
      <h4>Дизайн:</h4>
      <p>Лаврін Шимін, Вікторія Фединець</p>
      
      <h4>Технічна підтримка та програмне забезпечення:</h4>
      <p>Іван Сольський, Юрій Сушко, Михайло Бобуський, Олександр Пазюк, Юрій Бішко, Дарій Сольський, Юрій Батуринський, Андрій Федик</p>
      
      <h4>Супровідна програма виставки:</h4>
      <p>Мар’яна Куземська, Христина Бойко, Андрій Лінік, Богдан Шумилович, Андрій Бондаренко</p>
      
      <h4>Подяка за візуальні матеріали:</h4>
      <p>Лесі Крип’якевич (колекція проф. Степана Гайдучка), Івану Яремко, Арнольду Прохорову, Борису Ясіновському, В’ячеславу Афоніну, Юрію Назаркевичу, Олі Лінкевич, Євгену Кравсу, Андрію Боярову, Ірині Котлобулатовій, Ігору Котлобулатову, Миколі Смірнову та СК «Євроспорт», Державному архіву Львівської області, Бібліотеці Інституту народознавства Академії наук України, Львівській науковій бібліотеці ім. В.Стефаника НАН України, Центральному державному кінофотофоно архіву України імені Г.С. Пшеничного у Києві</p>
      
      <h4>Подяка за допомогу у створенні виставки:</h4>
      <p>Оксані Гречанюк, Мирославу Герцику, Ігору Кульчицькому, Олені Турянській, Ігору Добрянському, Роману Лозинському, Богдану Шумиловичу, Ірині Мацевко, Надії Дрожжиній, Зоряні Слюсарчук</p>
      
    </script>

    <?php _script(); ?>
  </body>
</html>