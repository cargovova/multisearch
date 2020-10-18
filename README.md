# multisearch
Environment settings:<br><br>
**Copy repository to folder "C:\prog\"<br>**
____
**nginx.conf : <br>**
```
        location / {
            root   C:/prog/multisearch;
            index  index.php;
        }
        location ~ \.php$ {
            root           C:/prog/multisearch;
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_index  index.php;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            include        fastcgi_params;
        }
```
____
**php.ini : <br>**
```
  extension_dir = "ext"
  extension=pdo_sqlite
  extension=sqlite3
```
