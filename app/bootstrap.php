<?php

if (!defined('APP_DIR')) {
	define('APP_DIR', realpath(__DIR__));
} 

if (!defined('BASE_DIR')) {
	define('BASE_DIR', realpath(APP_DIR.'/../'));
} 

function _header() {
	include (BASE_DIR.'/views/common/_header.php');
}

function _footer() {
	include (BASE_DIR.'/views/common/_footer.php');
}

function _style() {
	include (BASE_DIR.'/views/common/_style.php');
}

function _script() {
	include (BASE_DIR.'/views/common/_script.php');
}