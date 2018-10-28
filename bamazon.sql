DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  price  DECIMAL (5,2) NULL,
  stock_quanity INT NULL,
  PRIMARY KEY (item_id) 
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES (0001, "shoes laces", "shoe", 5.85, 3);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES (0002, "ps4 controller", "electronics", 69.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES (0003, "gloves", "clothing", 7.89, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES (0004, "paper", "office", 3.25, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES (0005, "tv", "electronic", 465.00, 9);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES (0006, "picture frame", "home decor", 7.56, 19);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES (0007, "brush", "beauty", 4.25, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES (0008, "book bag", "school supplies", 46.00, 36);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES (0009, "pirate costume", "seasonal", 39.99, 78);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES (0010, "bread", "grocery", 2.39, 50);

SELECT * FROM products;