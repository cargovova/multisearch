<?php
namespace src\db;

use SQLite3;
/*
 * Класс singleton для подключения к базе данных.
 */
class multisearchConnection extends SQLite3
{
    const dbPath = __DIR__ . DIRECTORY_SEPARATOR . "multisearch.db";
    function __construct() {
        $this->open(multisearchConnection::dbPath);
    }
    private function __clone(){}
    private function __wakeup(){}
}
