/* --    * Create the `burgers_db`.
--    * Switch to or use the `burgers_db`.
--    * Create a `burgers` table with these fields:
--      * **id**: an auto incrementing int that serves as the primary key.
--      * **burger_name**: a string.
--      * **devoured**: a boolean.

drop database if exists burgers_db;

create database burgers_db;

use burgers_db;

create table burgers (
  id int auto_increment primary key,
  burger_name varchar(100),
  devoured boolean
)

 */