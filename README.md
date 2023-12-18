## Jawaban Test nomor 3 - 7

### 3

```sql
SELECT City, COUNT(CustomerID) as TotalCustomer from customers GROUP BY City
```

### 4

```sql
SELECT * FROM customers WHERE Region IN (‘Mexico’,’Germany’);
```

### 5

```sql
SELECT * FROM customers WHERE CompanyName LIKE ‘cen%’;
```

### 6

```sql
SELECT ProductName, UnitPrice FROM products ORDER BY UnitPrice DESC LIMIT 10;
```

### 7

```sql
SELECT SUM(UnitsInStock) FROM products
```
