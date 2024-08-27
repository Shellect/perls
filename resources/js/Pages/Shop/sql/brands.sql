SET NAMES 'utf8';

--
-- Описание для таблицы brands
--
DROP TABLE IF EXISTS brands;
CREATE TABLE brands (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  brand VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB
AUTO_INCREMENT = 7
AVG_ROW_LENGTH = 2730
CHARACTER SET utf8
COLLATE utf8_general_ci;

-- 
-- Вывод данных для таблицы brands
--
INSERT INTO brands VALUES
(1, 'AUTORE'),
(2, 'TASAKI'),
(3, 'MIZUKI'),
(4, 'ANNOUSHKA'),
(5, 'SOKOLOV'),
(6, 'SAN LITE');
