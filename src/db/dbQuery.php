<?php


namespace src\db;

/*
 * Класс запросов в базу данных
 */
class dbQuery
{
    // выбрать всё. Используется при первоначальной загрузке страницы.
    public function select()
    {
        $connection = new multisearchConnection();
        $result = $connection->query('SELECT * FROM names ORDER BY name;');
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
        $connection = new multisearchConnection();
        $connection->query("INSERT INTO names (name) VALUES ('" . $text . "');");
    }

    // удаление строки из бд
    public function delete($text){
        $connection = new multisearchConnection();
        $connection->query("DELETE FROM names WHERE name=('" . $text . "');");
    }
}

