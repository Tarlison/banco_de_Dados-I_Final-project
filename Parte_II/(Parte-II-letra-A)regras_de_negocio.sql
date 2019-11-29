/*
    regra 1:
    Quando um produto novo é adicionado ele será registrado no estoque
    atraves do seu id e então algumas informações irão para lá. Também
    nele é possível definir a sua categoria e seu fornecedor, e para o
    produto ser removido do estoque apenas se for opção do usuário do
    sistema, já que zerar a sua quantidade no estoque não será considerado
    motivo de exclusão do sistema.
*/
CREATE OR REPLACE FUNCTION insert_produtos(v1 VARCHAR(40),v2 INTEGER,v3 FLOAT,v4 VARCHAR(40)) RETURNS INTEGER
AS $$
DECLARE
	id1 INTEGER := produtos.id from produtos LIMIT 1;
BEGIN
	RAISE NOTICE 'aqui %', id1;
    if id1 = 1 THEN
        INSERT INTO produtos(nome,id_cat,preco,cnpj_forn) VALUES
            (v1, v2, v3, v4);
        RETURN 1;
    ELSE
        RETURN 0;
    END IF;
END;
$$ LANGUAGE plpgsql
--usando a função
SELECT insert_produtos('novonovo',3,5.80,'27.589.152/0001-28') from produtos;

/*
    regra 2:
    O mesmo da regra 2 ocorre com os clientes e os seus cartões
*/
CREATE OR REPLACE FUNCTION new_card(id_cliente INTEGER,v1 DATE,v2 VARCHAR(40),v3 VARCHAR(40))
RETURNS INTEGER
AS $$
BEGIN
	v1 := CAST(v1 AS DATE);
    if id_cliente <> 0 THEN
        INSERT INTO cartoes(data_validade, n_cartao, status_cartao) VALUES
            (v1, v2, v3);
        RETURN 1;
    ELSE
        RETURN 0;
    END IF;
END;
$$ LANGUAGE plpgsql

SELECT new_card(1,'11/12/2022','2222 8123 1111 5222', 'Ativado') from cartoes;


