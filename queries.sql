-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select ProductName, CategoryName from [Product] as p
Join [Category] as c ON c.Id = p.CategoryId

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select o.Id, s.CompanyName from [Order] as o
Join [Shipper] as s
on s.Id = o.ShipVia
where o.OrderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select p.ProductName, od.Quantity from [Product] as p
Join [OrderDetail] as od
on od.OrderId = 10251
and od.ProductId = p.Id
order by p.ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select o.Id, c.CompanyName, e.Lastname
from [Order] as o
join [Customer] as c
on c.Id = o.CustomerId
join [Employee] as e
on e.Id = o.EmployeeId;