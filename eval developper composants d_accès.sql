/*
2) Procédures stockées
Codez deux procédures stockées correspondant aux requêtes 9 et 10. Les procédures stockées doivent prendre en compte les éventuels paramètres.
*/
DELIMITER $$
CREATE PROCEDURE date_last_cmd(IN CLIENT VARCHAR (40))
BEGIN
SELECT  MAX(OrderDate) AS 'Date de dernière commande'

FROM    orders, customers

WHERE   orders.CustomerID = customers.CustomerID 

AND     CompanyName = CLIENT;
END $$
DELIMITER ;
/*______________________________________________________________________________________________________________________________________________*/
DELIMITER $$
CREATE PROCEDURE avg_ship_by_client( IN anne INT, IN mois INT, IN CLIENT VARCHAR (40))
BEGIN
SELECT  FLOOR(AVG(datediff(ShippedDate,OrderDate))) AS "Délai moyen de livraison en jours"
FROM    orders 
WHERE YEAR(OrderDate) = anne
AND MONTH(Ordedate) = mois
GROUP BY CLIENT;
END $$ 
DELIMITER ;
/*______________________________________________________________________________________________________________________________________________*/
BEGIN
DECLARE id_com INT;
DECLARE id_client INT;
DECLARE id_produit INT;
DECLARE id_fournisseur INT;
DECLARE pays_commande VARCHAR (15);
DECLARE pays_fournisseur VARCHAR (15);
DECLARE pays_livraison VARCHAR (15);

SET id_produit= NEW.productid;
SET id_com = NEW.orderid;

SET id_fournisseur = (SELECT products.SupplierID FROM products 
JOIN suppliers ON suppliers.SupplierID = products.supplierID 
JOIN order_details ON products.ProductID = order_details.ProductID
JOIN orders ON order_details.OrderID = orders.OrderID
WHERE order_details.productid = id_produit
AND 	orders.orderid=id_com);

SET id_client = (SELECT customers.customerid FROM customers 
join products ON products.SupplierID = suppliers.SupplierID
JOIN order_details ON products.ProductID = order_details.ProductID
JOIN orders ON order_details.OrderID = orders.OrderID
WHERE order_details.productid=id_produit
AND 	orders.orderid = id_com);
			
			
SET pays_fournisseur = (SELECT country FROM suppliers 
			JOIN products ON suppliers.SupplierID=products.SupplierID 
			JOIN order_details ON order_details.ProductID = products.ProductID
			JOIN orders ON orders.orderid = order_details.OrderID 
			JOIN customers ON customers.CustomerID=orders.CustomerID
			
			WHERE orders.orderid = id_com
			AND orders.customerid = id_client
			AND order_details.productid = id_produit
			AND products.supplierID = id_fournisseur);
			
			
			
SET pays_livraison = (SELECT shipcountry FROM orders 	
			JOIN customers ON customers.CustomerID = orders.CustomerID
			JOIN order_details ON orders.orderid = order_details.OrderID 
			JOIN products ON order_details.ProductID = products.ProductID
			JOIN suppliers ON products.SupplierID = suppliers.SupplierID
			
					
			WHERE orders.orderid = id_com
			AND orders.customerid = id_client
			AND order_details.productid = id_produit
			AND products.SupplierID = id_fournisseur); 

IF  pays_fournisseur <> pays_livraison
THEN

SIGNAL SQLSTATE '40000' SET MESSAGE_TEXT = 'Les pays diffèrent, vous voulez faire exploser nos coûts de livraison ou quoi?';
END IF;
END