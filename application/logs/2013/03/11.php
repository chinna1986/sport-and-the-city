<?php defined('SYSPATH') OR die('No direct script access.'); ?>

2013-03-11 03:34:55 --- EMERGENCY: Session_Exception [ 1 ]: Error reading session data. ~ SYSPATH/classes/Kohana/Session.php [ 324 ] in /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Session.php:125
2013-03-11 03:34:55 --- DEBUG: #0 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Session.php(125): Kohana_Session->read(NULL)
#1 /home/afedyk/public_html/sport-and-city.dev/public/modules/database/classes/Kohana/Session/Database.php(74): Kohana_Session->__construct(Array, NULL)
#2 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Session.php(54): Kohana_Session_Database->__construct(Array, NULL)
#3 /home/afedyk/public_html/sport-and-city.dev/public/modules/auth/classes/Kohana/Auth.php(58): Kohana_Session::instance('database')
#4 /home/afedyk/public_html/sport-and-city.dev/public/modules/auth/classes/Kohana/Auth.php(37): Kohana_Auth->__construct(Object(Config_Group))
#5 /home/afedyk/public_html/sport-and-city.dev/public/application/classes/Controller/Template.php(14): Kohana_Auth::instance()
#6 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Controller.php(69): Controller_Template->before()
#7 [internal function]: Kohana_Controller->execute()
#8 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Request/Client/Internal.php(97): ReflectionMethod->invoke(Object(Controller_Ajax))
#9 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Request/Client.php(114): Kohana_Request_Client_Internal->execute_request(Object(Request), Object(Response))
#10 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Request.php(990): Kohana_Request_Client->execute(Object(Request))
#11 /home/afedyk/public_html/sport-and-city.dev/public/index.php(118): Kohana_Request->execute()
#12 {main} in /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Session.php:125