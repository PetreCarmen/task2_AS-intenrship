# task2_AS-intenrship
team task 

# create project database with docker:

1. Initialize container with mysql
```bash
docker run -d -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 mysql:8
```

2. Enter container and run bash:
```bash
mysql -p #enter password: password

# in mysql
create database projectsdb;
exit; # exit mysql


exit # exit bash
```
