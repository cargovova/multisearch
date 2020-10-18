<?php


namespace src;


use src\db\dbQuery;

class switchRequest
{
    const commonPattern = "/[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+/u";
    public static function defineRequest($request)
    {
        $dbQuery = new dbQuery();
        // При загрузке страницы - выбрать все записи.
        if ($request == ['search' => 'selectAll']) {
            return $dbQuery->select();
        // Записать в БД, если соответствует паттерну.
        } elseif (isset($request["insert"]) && preg_match(switchRequest::commonPattern, $request["insert"], $match)) {
            $dbQuery->insert($match[0]);
            return $dbQuery->select();
        // Удалить запись из БД.
        } elseif (isset($request["delete"]) && preg_match(switchRequest::commonPattern, $request["delete"], $match)) {
            $dbQuery->delete($match[0]);
            return $dbQuery->select();
        }
    }
}

