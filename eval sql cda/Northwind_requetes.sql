/*1) Requêtes d'intérrogation sur la base NorthWind
A partir du document la base Northwind, ecrivrez les requêtes permettants d'obtenir le résultat attendu.
Ecrivez les requêtes permettant d'obtenir les résultats suivant:
consigne datant du TBDA : respectez les noms des colonnes.
1 - Liste des contacts français :------------------------------------------------------------------------------------- */
SELECT companyName  AS Société,ContactName  AS contact,ContactTitle AS Fonction,Phone AS Téléphone
FROM customers
WHERE Country = 'France';
/* 2 - Produits vendus par le fournisseur « Exotic Liquids » :------------------------------------------------------------*/
SELECT productName AS Produit,UnitPrice AS Prix FROM products,suppliers
WHERE products.SupplierID = suppliers.SupplierID
AND CompanyName = 'Exotic Liquids';
/* 3 - Nombre de produits vendus par les fournisseurs Français dans l’ordre décroissant:-------------------------------- */
SELECT CompanyName AS Fournisseur, COUNT(ProductId) AS `Nombre de produits` FROM suppliers,products
WHERE products.SupplierId = suppliers.SupplierId 
AND suppliers.country = 'France'
GROUP BY Fournisseur
ORDER BY `Nombre de produits` DESC;
/* 4 - Liste des clients Français ayant plus de 10 commandes :-------------------------------------------------------------*/
SELECT CompanyName AS Client,COUNT(DISTINCT orders.OrderID) AS `Nombre de commandes`
FROM customers,orders,order_details
WHERE customers.CustomerID = orders.CustomerID 
AND orders.orderID = order_details.OrderID 
AND customers.country = 'France'
GROUP BY Client
HAVING `Nombre de commandes` > 10;
/* 5 - Liste des clients ayant un chiffre d’affaires > 30.000 :------------------------------------------------------------- */
SELECT CompanyName AS Client,SUM(UnitPrice*Quantity) AS CA,Country AS Pays
FROM order_details,customers,orders
WHERE customers.CustomerID = orders.CustomerID 
AND orders.OrderID = order_details.OrderID 
GROUP BY Client
HAVING CA > 30000
ORDER BY CA DESC;
/* 6 – Liste des pays dont les clients ont passé commande de produits fournis par « Exotic  Liquids » :-----------------------*/
SELECT customers.country AS Pays FROM customers,orders,order_details,products,suppliers
WHERE customers.customerID = orders.customerID 
AND orders.orderID = order_details.orderId 
AND order_details.productID = products.productID 
AND products.SupplierID = suppliers.SupplierID 
AND suppliers.CompanyName = 'Exotic Liquids'
GROUP BY  Pays;
/* 7 – Montant des ventes de 1997 : ---------------------------------------------------------------------------------------*/
SELECT SUM(UnitPrice*Quantity) AS `montant ventes 97` FROM order_details,orders
WHERE order_details.OrderID = orders.OrderID 
AND YEAR(OrderDate) = 1997;
/* 8 – Montant des ventes de 1997 mois par mois :----------------------------------------------------------------------------*/
SELECT MONTH(Orderdate) AS `Mois 97`, SUM(UnitPrice*Quantity) AS montant_ventes_97 FROM order_details,orders
WHERE order_details.OrderID = orders.OrderID 
AND YEAR(OrderDate) = 1997 
GROUP BY `Mois 97`;
/* 9 – Depuis quelle date le client « Du monde entier » n’a plus commandé ? -------------------------------------------------*/
SELECT MAX(OrderDate) AS `Date de dernière commande` FROM orders,customers
WHERE orders.CustomerID = customers.CustomerID 
AND CompanyName = 'Du monde entier';
/* 10 – Quel est le délai moyen de livraison en jours ?---------------------------------------------------------------------*/
SELECT FLOOR(AVG(datediff(ShippedDate,OrderDate))) AS `Délai moyen de livraison en jours`
FROM orders;