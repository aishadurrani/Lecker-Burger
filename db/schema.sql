create database burgers_db;
use burgers_db;

    CREATE TABLE `burger_db`.`burger` (
            `id` INT NOT NULL AUTO_INCREMENT,
            `burger_name` VARCHAR(100) NOT NULL,
            `devoured` BIT NOT NULL,
            `date` TIMESTAMP NOT NULL,
            PRIMARY KEY (`id`)

            );