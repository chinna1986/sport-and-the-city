<?php defined('SYSPATH') OR die('No direct script access.'); ?>

2013-03-25 07:42:40 --- EMERGENCY: Kohana_Exception [ 0 ]: Directory DOCROOT/resources/tmp/ must be writable ~ SYSPATH/classes/Kohana/Upload.php [ 80 ] in /home/afedyk/public_html/sport-and-city.dev/public/application/classes/Controller/Admin/Upload.php:112
2013-03-25 07:42:40 --- DEBUG: #0 /home/afedyk/public_html/sport-and-city.dev/public/application/classes/Controller/Admin/Upload.php(112): Kohana_Upload::save(Array, NULL, '/home/afedyk/pu...', 511)
#1 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Controller.php(84): Controller_Admin_Upload->action_index()
#2 [internal function]: Kohana_Controller->execute()
#3 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Request/Client/Internal.php(97): ReflectionMethod->invoke(Object(Controller_Admin_Upload))
#4 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Request/Client.php(114): Kohana_Request_Client_Internal->execute_request(Object(Request), Object(Response))
#5 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Request.php(990): Kohana_Request_Client->execute(Object(Request))
#6 /home/afedyk/public_html/sport-and-city.dev/public/index.php(118): Kohana_Request->execute()
#7 {main} in /home/afedyk/public_html/sport-and-city.dev/public/application/classes/Controller/Admin/Upload.php:112
2013-03-25 07:42:45 --- EMERGENCY: ErrorException [ 8 ]: Undefined index: file ~ APPPATH/classes/Controller/Admin/Upload.php [ 110 ] in /home/afedyk/public_html/sport-and-city.dev/public/application/classes/Controller/Admin/Upload.php:110
2013-03-25 07:42:45 --- DEBUG: #0 /home/afedyk/public_html/sport-and-city.dev/public/application/classes/Controller/Admin/Upload.php(110): Kohana_Core::error_handler(8, 'Undefined index...', '/home/afedyk/pu...', 110, Array)
#1 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Controller.php(84): Controller_Admin_Upload->action_index()
#2 [internal function]: Kohana_Controller->execute()
#3 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Request/Client/Internal.php(97): ReflectionMethod->invoke(Object(Controller_Admin_Upload))
#4 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Request/Client.php(114): Kohana_Request_Client_Internal->execute_request(Object(Request), Object(Response))
#5 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Request.php(990): Kohana_Request_Client->execute(Object(Request))
#6 /home/afedyk/public_html/sport-and-city.dev/public/index.php(118): Kohana_Request->execute()
#7 {main} in /home/afedyk/public_html/sport-and-city.dev/public/application/classes/Controller/Admin/Upload.php:110
2013-03-25 07:43:56 --- EMERGENCY: Kohana_Exception [ 0 ]: Directory DOCROOT/resources/tmp/ must be writable ~ SYSPATH/classes/Kohana/Upload.php [ 80 ] in /home/afedyk/public_html/sport-and-city.dev/public/application/classes/Controller/Admin/Upload.php:112
2013-03-25 07:43:56 --- DEBUG: #0 /home/afedyk/public_html/sport-and-city.dev/public/application/classes/Controller/Admin/Upload.php(112): Kohana_Upload::save(Array, NULL, '/home/afedyk/pu...', 511)
#1 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Controller.php(84): Controller_Admin_Upload->action_index()
#2 [internal function]: Kohana_Controller->execute()
#3 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Request/Client/Internal.php(97): ReflectionMethod->invoke(Object(Controller_Admin_Upload))
#4 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Request/Client.php(114): Kohana_Request_Client_Internal->execute_request(Object(Request), Object(Response))
#5 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Request.php(990): Kohana_Request_Client->execute(Object(Request))
#6 /home/afedyk/public_html/sport-and-city.dev/public/index.php(118): Kohana_Request->execute()
#7 {main} in /home/afedyk/public_html/sport-and-city.dev/public/application/classes/Controller/Admin/Upload.php:112
2013-03-25 07:44:46 --- EMERGENCY: Kohana_Exception [ 0 ]: GD is either not installed or not enabled, check your configuration ~ MODPATH/image/classes/Kohana/Image/GD.php [ 27 ] in /home/afedyk/public_html/sport-and-city.dev/public/modules/image/classes/Kohana/Image/GD.php:88
2013-03-25 07:44:46 --- DEBUG: #0 /home/afedyk/public_html/sport-and-city.dev/public/modules/image/classes/Kohana/Image/GD.php(88): Kohana_Image_GD::check()
#1 /home/afedyk/public_html/sport-and-city.dev/public/modules/image/classes/Kohana/Image.php(54): Kohana_Image_GD->__construct('/home/afedyk/pu...')
#2 /home/afedyk/public_html/sport-and-city.dev/public/application/classes/Controller/Admin/Upload.php(129): Kohana_Image::factory('/home/afedyk/pu...')
#3 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Controller.php(84): Controller_Admin_Upload->action_index()
#4 [internal function]: Kohana_Controller->execute()
#5 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Request/Client/Internal.php(97): ReflectionMethod->invoke(Object(Controller_Admin_Upload))
#6 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Request/Client.php(114): Kohana_Request_Client_Internal->execute_request(Object(Request), Object(Response))
#7 /home/afedyk/public_html/sport-and-city.dev/public/system/classes/Kohana/Request.php(990): Kohana_Request_Client->execute(Object(Request))
#8 /home/afedyk/public_html/sport-and-city.dev/public/index.php(118): Kohana_Request->execute()
#9 {main} in /home/afedyk/public_html/sport-and-city.dev/public/modules/image/classes/Kohana/Image/GD.php:88