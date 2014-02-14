<?php include('../app/bootstrap.php'); ?>
<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Sub-Main | Sport and the City</title>
        <meta name="description" content="">
        <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <!-- Mobile viewport optimized: h5bp.com/viewport -->
        <meta name="viewport" content="width=device-width">
        
        <?php _style(); ?>
    </head>
    <body data-background="url(/assets/upload/background-03.jpg)" data-start="-75" data-end="0">

        <?php _header(); ?>
            
        <div id="content" class="content">
            <ul>
                <li>
                    <div class="block span8">
                        <div class="block-title" data-i18n="Sport in Multiethnic City"></div>
                        <div id="slide-1" class="block-carousel carousel slide">
                            <!-- Carousel items -->
                            <div class="carousel-inner">
                                <div class="active item">
                                    <img src="assets/title.jpg" alt="img" title="img"/>
                                    <div class='carousel-caption'>
                                        <h4 data-i18n="Sport in Multiethnic City"></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
             <!--
                <li>
                    <div class="block span4" style="padding-top: 50%;">
                        <div class="block-title" data-i18n="Header-title-text"></div>
                        <div class="block-text" 
                                        data-modal="modal" 
                                        data-src="text-1.php"
                                        data-i18n="title-text" 
                                        data-i18n-src="#title-text"></div>
                    </div>


                </li>
            -->
                <li>
                    <div class="block span5">
                        <div class="block-title" data-i18n="Origins of Modern Sport"></div>
                        <ul class="block-quartet">
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
                            <li class="bottom">
                                <a href="origins-of-modern-sport/In-Search-of-Moral-Physical-Political-and-Social-Health-for-the-Community/" 
                                   data-modal="modal"
                                   data-src="origins-of-modern-sport/In-Search-of-Moral-Physical-Political-and-Social-Health-for-the-Community/" 
                                   onclick="return false;">
                                    <img src="assets/thumbs/thumb-3.jpg">
                                    <span class="bg-multy" data-i18n="In Search of Moral, Physical, Political and Social Health for the Community">Гімнастичний рух: у пошуках морального, фізичного, політичного і соціального здоров’я</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li>
                    <div class="block span5">
                        <div class="block-title" data-i18n="Sokil Movement"></div>
                        <ul class="block-quartet">
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
                            <li class="bottom">
                                <a href="sokil-movement/ivan-boberskyi/" 
                                            data-modal="modal" 
                                            data-src="sokil-movement/ivan-boberskyi/">
                                    <img src="assets/thumbs/thumb-6.jpg">
                                    <span class="bg-multy" data-i18n="Ivan Boberskyi">Іван Боберський</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
<!--
                <li>
                    <div class="block span3">
                        <div class="block-title" data-i18n="Football"></div>
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
                    </div>
                </li>

                <li>
                    <div class="block span3">
                        <div class="block-title" data-i18n="Mass Audience">Масова Аудиторія</div>
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
                    </div>
                </li>
-->
                <!--
                <li>
                    <div class="block span5">
                        <div class="block-title">АНАЛІТИКА</div>

                    </div>
                </li>

                <li>
                    <div class="block span5">
                        <div class="block-title">АВТОРИ</div>

                    </div>
                </li>
                -->

            </ul>
        </div><!-- /#content -->

        <div id="scroller" class="scroller">
            <div id="scroller-bar"></div>
        </div>

        <script id='title-text-ru' type="text/i18n">
            <p>У листопаді 2011 р. - травні 2012 р. в Центрі міської історії Центрально-Східної Європи тривала спеціалізована виставка "Дім: Століття змін", що досліджувала історію житла, зокрема його культурні та соціальні аспекти, а також політичні й ідеологічні контексти, протягом всього ХХ століття. Виставка показувала дім як багатогранне місце, в якому заломлюється цілий комплекс політичних, ідеологічних, національних, культурних і гендерних історій, в контексті Центрально-Східної Європи. Тут також були представлені глобальні і регіональні аспекти, однак експозиція була присвячена передовсім Львову, бо це надає чудову можливість вивчити перетворення і трансформації "дому" у ХХ столітті.</p>
            <p>Чому культура житла стала темою для виставки? Зазвичай ми вважаємо дім особистим простором, який належить тільки його господареві чи господині і лише їх цікавить. Але дім можна також розглядати як приватну модель суспільства, що може багато розповісти нам про зовнішній світ, зокрема про постійну взаємодію приватної і суспільної, особистої і соціальної площин, взаємодію нас та інших. Хочемо поставити дуже загальне питання: "Що таке дім?" Дім є місцем, в якому ми мешкаємо, простором, в якому відбувається наше особисте, інтимне й емоційне, життя, наша пам’ять і тотожність. Ми спробували шукати відповідь, спираючись на конкретний приклад міста Львова у контексті Центрально-Східної Європи.</p>
            <p>Формат виставки поєднував розповідь-опис з різними мультимедійними додатками. Виставковий простір був поділений на дві основні частини, кожна з яких вирізнялася конкретним змістом і візуальним наповненням. У кожній із цих частин відповідні тексти та зображення допомагали відвідувачу зрозуміти найважливіші соціально-культурні, політичні, ідеологічні, економічні й технологічні чинники, які змінили наш спосіб життя в ХХ столітті.</p>  
            <p>Основним завданням першої частини було висвітлити загальний розвиток історичних уявлень про дім і способів їх втілення у ХХ столітті. Тут експозиція досліджувала, як ідеології, модернізаційні проекти, держава, війна, технології та соціальна нерівність впливали на спосіб життя людей, а також як ідея "дому" впліталася в соціальні і політичні проекти ХХ століття.</p>
            <p>Друга частина складалася з чотирьох традиційних/функціональних зон, пов’язаних із "домом": вітальня, кухня, ванна кімната, спальня. Експозиція простежувала основні способи їх ужитку упродовж ХХ століття, спираючись на зафіксовані приклади зі Львова.</p>
        </script>

        <script id='title-text-en' type="text/i18n">
            <p>In November 2011 the Center for Urban History of East-Central Europe opened a new specialized exhibition, entitled "Home: A Century of Change," which examined the history of the dwelling, particularly its cultural and social aspects, as well as its political and ideological contexts, throughout the twentieth century.
            <p>The exhibition looks at home as a multi-faceted place, which containing complex political, ideological, national, cultural, and gender histories within the context of East Central Europe. While both global and regional contexts were incorporated, our exhibition focused on the case of Lviv, which offers an excellent opportunity to study the re-making and transformation of "home" in the 20th century.</p>
            <p>Why would the culture of the dwelling be an important theme for an exhibition? Usually, we consider a person’s home to be his/her personal space, which belongs only to him/her and is of concern only to him/her. Yet we can also look at the home as, first and foremost, a private model of society, which can tell us a great deal about the outside world and, in particular, the ceaseless interaction of the private and the public, the personal and the social, the self and the other. With this exhibition we wanted to ask a very general question: "What is Home?" Home is a place in which we live and a space in which we play out our personal, intimate, and emotional life, our memory, and our identity. We suggested answers to this question by looking at the specific case of the city of Lviv in the context of East Central Europe.</p>
            <p>The format of the exhibition was conceived to combine a story-telling narrative with different multimedia applications. The exhibition space was subdivided into two main areas, each with specific content and visual focuses. In these areas, relevant texts and images helped the visitor understand the most meaningful socio-cultural, political, ideological, economic, and technological factors that affected and changed our way of living in the twentieth century:</p>
            <p>In Area 1 the main task was to show the general development of historical perceptions and practices of the home in the twentieth century. We showed how ideologies, modernization projects, the state, war, technology, and social inequality affected people’s way of living and how the idea of "home" was embodied in the social and political projects of the twentieth century.</p>
            <p>Area 2 was divided into four conventional/functional zones associated with "home": living room, kitchen, bathroom, bedroom. In these four zones we introduced a primary (but not exclusive) issue, and explored each through the 20th century using documented cases from Lviv.</p>
        </script>

        <script id='title-text-ua' type="text/i18n">
            <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).</p>
            <p>Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32</p>
            <p>Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод, сделанный H. Rackham, 1914 год.</p>
            <p>Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.</p>
        </script>


        <?php _footer(); ?>

        <?php _script(); ?>
    </body>
</html>
