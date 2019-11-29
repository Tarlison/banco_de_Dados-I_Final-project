--Query 1)
/*
    Essa consulta, quando utilizada, irá retornar para o usuário
    o nome do produto, a sua categoria, o seu preço e o nome do
    seu fornecedor usando as 4 tabelas necessárias para isso.
*/
SELECT p.nome,
       c.nome as categoria,
       p.preco,
       f.nome_fantasia
FROM produtos p
INNER JOIN categorias c ON p.id_cat = c.id
INNER JOIN estoque e ON p.id = e.id_produto
INNER JOIN fornecedores f ON p.CNPJ_forn = f.CNPJ;

--Query 2)
/*
    Essa consulta, quando utilizada, irá retornar para o usuário
    o nome do cliente, seu CPF, seu endereço e o status apenas que
    estao em dia com o seu cartao e com ele ativado( ou seja nao bloqueado)//////*/
SELECT c.nome,
       c.CPF,
       c.endereco,
       cd.status_cartao
FROM clientes c
INNER JOIN cartoes cd ON c.id_cartao = cd.id
WHERE cd.status_cartao = 'Ativado'
ORDER BY c.nome ASC;

--Query 3)
/*
    Essa consulta, quando utilizada, irá retornar para o usuário o CPF,
    o nome e o cargo do funcionario com um inner join entre a tabela
    cargos e a tabela gerada pela funcao get_pessoa_func().
*/ --primeiro criar a função que irei usar na query

CREATE OR REPLACE FUNCTION get_pessoa_func() RETURNS TABLE(CPF VARCHAR(40), nome VARCHAR(40), id_cargo INTEGER) AS $$
BEGIN
    RETURN QUERY SELECT
        p.CPF,
        p.nome,
        CAST(f.id_cargo AS INTEGER)
    FROM
        pessoa as p
    INNER JOIN
        funcionarios as f
    ON
        p.CPF = f.CPF
    ORDER BY
        f.id_cargo ASC;
END;
$$ LANGUAGE plpgsql;

---Usando a função na query

SELECT pf.CPF,
       pf.nome,
       c.nome as cargo
FROM cargos as c
INNER JOIN get_pessoa_func() as pf ON c.id = pf.id_cargo
ORDER BY c.nome ASC;

--Query 4)
/*
    Essa consulta, quando utilizada, irá retornar para o usuário o nome
    do produto no estoque, a sua categoria, sua quantidade e seu fornecedor
    com um inner join entre a tabela de estoque e a tabela gerada pela funcao
    get_prod_cat_forn().
*/ --primeiro criar a função que irei usar na query

CREATE OR REPLACE FUNCTION get_prod_cat_forn() RETURNS TABLE(nome_cat VARCHAR(40), id INTEGER, fornecedor VARCHAR(40)) AS $$
BEGIN
    RETURN QUERY
    SELECT
        c.nome,
        CAST(p.id AS INTEGER),
        f.nome_fantasia
    FROM
        categorias c
    INNER JOIN
        produtos p
    ON
        c.id = p.id_cat
    INNER JOIN
        fornecedores f
    ON
        p.CNPJ_forn = f.CNPJ;
END;
$$ LANGUAGE plpgsql;

---Usando a função na query

SELECT e.nome_produto as produto,
       pcf.nome_cat as categoria,
       e.quantidade,
       pcf.fornecedor
FROM Estoque as e
INNER JOIN get_prod_cat_forn() as pcf ON pcf.id = e.id_produto
ORDER BY e.quantidade DESC;