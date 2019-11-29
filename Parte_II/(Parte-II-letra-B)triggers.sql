/*
    valor precisa ser atualizado na tabela de estoques
*/
CREATE OR REPLACE FUNCTION add_estoque() RETURNS TRIGGER AS $$
    BEGIN
        insert into estoque(quantidade) values
        (id_produto, OLD.quantidade + NEW.quantidade);
        RETURN NEW;
    END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_estoque AFTER
INSERT ON estoque
FOR EACH STATEMENT EXECUTE PROCEDURE add_estoque();

INSERT INTO Produtos(nome, preco, CNPJ_forn)
VALUES ('novoproduto',5.11,'27.589.152/0001-28');

INSERT INTO produtos(nome_produto, quantidade)
VALUES ('novoproduto',200);

