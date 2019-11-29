CREATE VIEW produtos_estoque_forn WITH (security_barrier) AS
SELECT p.nome,
       c.nome as categoria,
       p.preco,
       f.nome_fantasia
FROM produtos p
INNER JOIN categorias c ON p.id_cat = c.id
INNER JOIN estoque e ON p.id = e.id_produto
INNER JOIN fornecedores f ON p.CNPJ_forn = f.CNPJ;
