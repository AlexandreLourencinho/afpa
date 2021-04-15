/*
2) Procédures stockées
Codez deux procédures stockées correspondant aux requêtes 9 et 10. Les procédures stockées doivent prendre en compte les éventuels paramètres.
*/
DELIMITER $$
CREATE PROCEDURE date_last_cmd(IN CLIENT VARCHAR (40))
BEGIN
SELECT MAX(OrderDate) AS 'Date de dernière commande' FROM orders,customers
WHERE orders.CustomerID = customers.CustomerID 
AND CompanyName = CLIENT;
END $$
DELIMITER ;
/*---------------------------------------------------------------------------------------------------------------------------*/
DELIMITER $$
CREATE PROCEDURE avg_ship_by_client(IN anne INT, IN mois INT, IN CLIENT VARCHAR (40))
BEGIN
SELECT FLOOR(AVG(datediff(ShippedDate,OrderDate))) AS 'Délai moyen de livraison en jours' FROM orders 
WHERE YEAR(OrderDate) = anne
AND MONTH(Ordedate) = mois
GROUP BY CLIENT;
END $$ 
DELIMITER ;
/*---------------------------------------------------------------------------------------------------------------------------*/
DELIMITER $$
CREATE TRIGGER t_pays AFTER INSERT ON order_details FOR EACH ROW
BEGIN
DECLARE id_com INT;
DECLARE id_produit INT;
DECLARE id_fournisseur INT;
DECLARE pays_fournisseur VARCHAR (15);
DECLARE pays_livraison VARCHAR (15);
SET id_produit= NEW.productid;
SET id_com = NEW.orderid;
SET id_fournisseur = (SELECT suppliers.SupplierID FROM suppliers
JOIN products ON products.supplierid = suppliers.supplierid
JOIN order_details ON products.productid=order_details.productid
JOIN orders ON orders.OrderID = order_details.OrderID
WHERE order_details.ProductID=id_produit
AND orders.OrderID = id_com);
SET pays_fournisseur = (SELECT Country FROM suppliers
JOIN products ON products.SupplierID =suppliers.SupplierID
JOIN order_details ON order_details.ProductID  = products.ProductID
JOIN orders ON orders.OrderID = order_details.OrderID
WHERE order_details.ProductID = id_produit
AND orders.OrderID = id_com);
SET pays_livraison = (SELECT ShipCountry FROM orders
JOIN order_details ON order_details.OrderID = orders.OrderID
JOIN products ON products.ProductID = order_details.ProductID
WHERE order_details.productID = id_produit
AND orders.OrderID = id_com);
IF pays_fournisseur <> pays_livraison THEN
SIGNAL SQLSTATE '40000' SET MESSAGE_TEXT = 'Les pays diffèrent, vous voulez faire exploser nos coûts de livraison?';
END IF;
END $$
DELIMITER ;