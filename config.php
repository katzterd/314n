<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASSWD', '');
define('DB_DATABASE', '314n');
define('DB_CHARSET', 'utf8mb4');
define('DB_COLLATION', 'utf8mb4_unicode_ci');

define('HASHING_SALT', '!!! Type in random characters !!!');
define('ALLOW_LEGACY_HASHES', true); // Backward compatibility for passwords hashed with md5() in the database (which will be immediately re-hashed with the modern method). Only useful for old instances
define('PUBLIC_HASHING_SALT', '!!! Type in random characters !!!'); // Salt for cookies
define('ALLOW_GUESTS', true); // Whether or not guest accounts should be created for anonymous users
define('IDENTIFY_GUESTS_BY_IP', true); // Whether or not guest user IDs should be associated with their IPs (false is recommended only for hidden network sites or local dev environment)
define('LOCAL_IP_LIST', '127.0.0.1 0.0.0.0'); // Space-separated list of IPs that are treated as local: guests accessing from these IPs will not be identified by IP, each getting a unique identifier instead. Useful if your site has mirrors in hidden networks
define('STORE_USER_IP', false); // Store the last IP the user has logged in unhashed in the database, just for fun
define('GUEST_ACCOUNT_TTL', 60*60*24*30); // After what period (in seconds) of inactivity guest accounts must be deleted. Default is one month; set to 0 to never delete guest accounts
define('ALLOW_ANONYMOUS_POSTING', true); // Whether or not HIDEME and SHOWME commands that allow users to hide or reveal their identity should be supported

error_reporting(E_ALL ^ E_NOTICE);
set_error_handler(function(int $errno, string $errstr) {
  if ((strpos($errstr, 'Undefined array key') === false) && (strpos($errstr, 'Undefined variable') === false)) {
    return false;
  } else {
    return true;
  }
}, E_WARNING);