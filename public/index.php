<?php

spl_autoload_register(function ($class) {
    include dirname(__DIR__) . DIRECTORY_SEPARATOR . $class . '.php';
});

if (isset($_POST)) {
    return \src\switchRequest::defineRequest($_POST);
}
else {
    header('Location: /public/html/front.html');
}