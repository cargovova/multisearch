<?php


namespace src\db;

/*
 * Класс запросов в базу данных
 */
class dbQuery
{
    private $connection;
    public function __construct()
    {
        $this->connection = new multisearchConnection();
    }

    // выбрать всё. Используется при первоначальной загрузке страницы.
    public function select()
    {
        $result = $this->connection->query('SELECT * FROM names ORDER BY name;');
        $commonArray = [];
        // fetchArray выдает одну строку только, а while помещает все строки в массив
        while ($arrays = $result->fetchArray(SQLITE3_ASSOC)) {
            $commonArray[] = $arrays["name"];
        }
        echo json_encode(['names' => $commonArray]);
    }

    // вставка нового значения в базу.
    public function insert($text)
    {
        $this->connection = $this->connection->query("INSERT INTO names (name) VALUES ('" . $text . "');");
    }

    // удаление строки из бд
    public function delete($text){
        $this->connection = $this->connection->query("DELETE FROM names WHERE name=('" . $text . "');");
    }
}
