// вынес отдельно так как используется несколько раз
function ajax(ajaxData, tableName) {
    // стереть таблицу
    $(tableName).html('');
    // создать глобальную переменную
    window.tableName = {
        name: tableName
    }
    $.ajax({
        url : '/public/index.php',
        type : 'POST',
        data : ajaxData,
        error : function() {
            alert('error');
        },
        success : returnAjax
    });
}
//callBack
function returnAjax (data){
    $(tableName.name).show();
    resultAjax(JSON.parse(data));
}